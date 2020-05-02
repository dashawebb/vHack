import React, { useState, useEffect } from 'react'
import LessonContent from "./LessonContent";
import Students from "./Students";
import Timer from './Timer'
import styles from './Lesson.module.less'

const CounterScreen = ({ timeOff }) => {
    // Таймер задается тут
    // const [counter, setCounter] = useState(5)
    //
    const [timeToStart, setTimeToStart] = useState(false)
    //
    // useEffect(() => {
    //     const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
    //     return () => clearInterval(timer)
    // }, [counter])
    //
    // const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 })
    // useEffect(() => {
    //     setTime({
    //         ...time,
    //         hours: Math.floor(counter / 3600),
    //         minutes: Math.floor(counter / 60),
    //         seconds: counter,
    //     })
    //     if (counter === 0) {
    //         setTimeToStart(true)
    //     }
    // }, [counter])

    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <div className={styles.card}>
                    <div className={styles.title}>Ближайший урок</div>
                    <div className={styles.subject}>Биология, 8А</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.timerCard}>
                        <div className={styles.title}>
                            {!timeToStart ? 'Урок начнётся через' : 'Урок начался!'}
                        </div>
                        <Timer seconds={5} timeToStart={timeToStart} setTimeToStart={setTimeToStart}/>
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
                <LessonContent/>
            </div>
            <Students />
        </div>
    )
}

const Lesson = () => {
    const [showTimer, setShowTimer] = useState(true)
    return <>{showTimer ? <CounterScreen timeOff={setShowTimer} /> : <Translation />}</>
}

export default Lesson
