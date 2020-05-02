import React from 'react'
import { useEffect, useState } from 'react'
import styles from './Lesson.module.less'

const Timer = ({ seconds, timeToStart = false, setTimeToStart = () => {} }) => {
    // Таймер задается тут
    const [counter, setCounter] = useState(seconds)

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
        <div className={`${styles.timer} ${timeToStart ? styles.timerOff : ''}`}>
            0{time.hours} : 0{time.minutes} :{' '}
            {time.seconds > 60 ? time.seconds % (60 * time.minutes) : time.seconds}
        </div>
    )
}

export default Timer
