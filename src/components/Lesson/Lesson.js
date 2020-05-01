import React, { useState, useEffect } from 'react'
import styles from './Lesson.module.less'

const Timer = ({ timeOff }) => {
    // Таймер задается тут
    const [counter, setCounter] = useState(5)

    const [timeToStart, setTimeToStart] = useState(false)

    useEffect(() => {
        const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
        return () => clearInterval(timer)
    }, [counter])

    const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
    useEffect(() => {
        setTime({
            ...time,
            hours: Math.floor(counter / 3600),
            minutes: Math.floor(counter / 60),
            seconds: counter,
        })
        if (counter === 0) {
            setTimeToStart(true)
        }
    }, [counter])

    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.title}>Ближайший урок</div>
                    <div>Биология, 8А</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.title}>Урок начнется через</div>
                    <div className={styles.timer}>
                        0{time.hours} : 0{time.minutes} :
                        {time.seconds > 60 ? time.seconds % (60 * time.minutes) : time.seconds}
                    </div>
                </div>
                {timeToStart && (
                    <div className={styles.startButton} onClick={() => timeOff(false)}>
                        <span className={styles.buttonTitle}>Начать урок</span>
                    </div>
                )}
            </div>
        </div>
    )
}

const Translation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.topPanel}>
                <div className={styles.translation}>Ща урок будет</div>
                <div className={styles.lessonContent}>а тут содержание урока</div>
            </div>
            <div className={styles.students}>студенты</div>
        </div>)
}

const Lesson = () => {
    const [showTimer, setShowTimer] = useState(true)
    return <>{showTimer ? <Timer timeOff={setShowTimer} /> : <Translation />}</>
}

export default Lesson
