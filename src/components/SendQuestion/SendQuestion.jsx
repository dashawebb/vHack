import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'
import styles from '../Lesson/LessonContent.module.less'

class Test extends Component {
    constructor() {
        super()
        this.state = {
            response: false,
            endpoint: 'http://194.87.94.107:5555/',
            value: '',
            questionSent: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.sendRecurring = this.sendRecurring.bind(this)
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        const { endpoint } = this.state
        const socket = socketIOClient(endpoint)
        socket.on('connect', () => {
            socket.emit('publishpoll', this.state.value)
        })
        this.setState({ questionSent: true })
        event.preventDefault()
    }

    sendRecurring(event) {
        setInterval(this.handleSubmit, 10000)
        event.preventDefault()
    }

    componentDidMount() {
        const { endpoint } = this.state
        const socket = socketIOClient(endpoint)
        socket.on('FromAPI', (data) => this.setState({ response: data }))
        socket.on('connect', () => {
            socket.emit('sendpoll')
        })
    }

    render() {
        const { response } = this.state
        return (
            <div style={{ textAlign: 'center' }}>
                <div className={styles.form}>
                    <form onSubmit={this.handleSubmit}>
                        {/*<textarea*/}
                        {/*    className={styles.formInput}*/}
                        {/*    onChange={this.handleChange}*/}
                        {/*    data-type="text"*/}
                        {/*    value={this.state.value}*/}
                        {/*    maxLength={256}*/}
                        {/*/>*/}
                        {!this.state.questionSent ? (
                            <button type="submit" className={styles.button}>
                                Отправить задание
                            </button>
                        ) : (
                            <button type="submit" className={styles.buttonSuccess}>
                                Успешно
                            </button>
                        )}
                    </form>
                </div>
                {/*{response*/}
                {/*    ? <p>*/}
                {/*        Ето дата: {response} °F*/}
                {/*    </p>*/}
                {/*    : <p>Loading...</p>}*/}
            </div>
        )
    }
}

export default Test
