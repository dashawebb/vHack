import React, { useState, useEffect, useRef } from 'react'
import styles from './Timetable.module.less'

const CalendarPanel = ({ setPanelVisible }) => {
    const HidePanelOnClick = (ref) => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setPanelVisible(false)
            }
        }

        useEffect(() => {
            document.addEventListener('mousedown', handleClickOutside)
            return () => {
                document.removeEventListener('mousedown', handleClickOutside)
            }
        })
    }

    const Wrapper = (props) => {
        const wrapperRef = useRef(null)
        HidePanelOnClick(wrapperRef)
        return <div ref={wrapperRef}>{props.children}</div>
    }

    return (
        <Wrapper>
            <div className={styles.panel}>я календарик</div>
        </Wrapper>
    )
}

const Timetable = () => {
    const [showTimetable, setShowTimetable] = useState(false)
    return (
        <div className={styles.content}>
            <p className={styles.schedule}>Моё расписание</p>
            <div className={styles.card}></div>
            {!showTimetable ? (
                <div className={styles.calendarPicker} onClick={() => setShowTimetable(true)}></div>
            ) : (
                <CalendarPanel setPanelVisible={setShowTimetable} />
            )}
        </div>
    )
}

export default Timetable
