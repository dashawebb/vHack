import React, { useState } from 'react'
import Timer from './Timer'
import { ReactComponent as RingIcon } from '../../assets/img/ring.svg'
import styles from './LessonContent.module.less'

const LessonContent = () => {
    const [timeOff, setTimeOff] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.lessonContent}>
                <div className={`${styles.timer} ${timeOff ? styles.timerOff : ''}`}>
                    <Timer seconds={2400} /><RingIcon/>
                </div>
                <div className={styles.topic}>
                    Значение, строение и функционирование нервной системы.
                </div>
                <div className={styles.checklist}>Чеклист урока</div>
                <div className={styles.steps}>
                    <label className={styles.container}>Нервная система
                        <input type="checkbox"/>
                            <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>Нервная ткань
                        <input type="checkbox"/>
                            <span className={styles.checkmark}></span>
                    </label>
                    <label className={styles.container}>Синапсы
                        <input type="checkbox"/>
                            <span className={styles.checkmark}></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default LessonContent
