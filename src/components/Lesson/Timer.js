import React from 'react'
import { useEffect, useState } from 'react'

const Timer = ({ seconds, setTimeToStart = () => {} }) => {
    // Таймер задается в родительском компоненте пропсом seconds
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

    const format = (time) => (time < 10 ? `0${time}` : time)

    return (
        <>
            {format(time.hours)} : {format(time.minutes)} :{' '}
            {time.seconds > 60 ? time.seconds % (60 * time.minutes) : format(time.seconds)}
        </>
    )
}

export default Timer
