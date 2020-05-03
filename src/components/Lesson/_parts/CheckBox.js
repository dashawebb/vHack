import React, { Component } from 'react'
import styles from './CheckBox.module.less'

export default class CheckBox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 'Checkbox1',
            isChecked: this.props.initialChecked,
        }
    }

    // <CheckBox
    // label="Publish Video"
    // initialChecked={this.state.video}
    // onChange={this.setVideo}
    // />

    onChange = (event) => {
        let isChecked = event.currentTarget.checked
        this.setState({ isChecked })
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.isChecked !== this.state.isChecked &&
            typeof this.props.onChange === 'function'
        ) {
            this.props.onChange(this.state.isChecked)
        }
    }

    // <div>
    // <label htmlFor={this.state.id} className={styles.container}>
    // {this.props.label}
    // <input
    // type="checkbox"
    // checked={this.state.isChecked}
    // onChange={this.onChange}
    // id={this.state.id}
    // />
    // <span className={styles.checkmark}></span>
    // </label>
    // </div>

    render() {
        return (
            <div className={styles.container}>
                <label htmlFor={this.state.id}>
                    {this.props.label}
                    <input
                        className={styles.checkmark}
                        type="checkbox"
                        checked={this.state.isChecked}
                        id={this.state.id}
                        onChange={this.onChange}
                    />
                    <span className={styles.checkmark}></span>
                </label>
            </div>
        )
    }
}
