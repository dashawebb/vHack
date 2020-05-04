import React, { useState } from 'react'
import Timer from './Timer'
import { ReactComponent as RingIcon } from '../../assets/img/ring.svg'
import styles from './LessonContent.module.less'
import Test from '../SendQuestion/SendQuestion'

const LessonPlan = () => {
    return (
        <div className={styles.questions}>
            <div className={styles.topic}>Introducing the Present Continuous Tense </div>
            <div className={styles.checklist}>Чеклист урока</div>
            <label className={styles.container}>
                Present Continuous Tense <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
                Examples
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
            <label className={styles.container}>
                Present Simple vs Present Continuous
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
            </label>
        </div>
    )
}

const HomeworkForm = () => {
    const [homework, setHomework] = useState(
        'Читать стр. 87-91, ответить на вопросы 2-5 в конце параграфа'
    )

    const handleSubmit = (target) => {
        console.log(target.value)
    }

    const handleChange = (target) => {
        setHomework(target.value)
    }

    return (
        <>
            <div className={styles.checklist}>Домашнее задание</div>
            <div className={styles.form}>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className={styles.formInput}
                        onChange={handleChange}
                        data-type="text"
                        value={homework}
                        maxLength={256}
                    />
                </form>
                <button type="submit" className={styles.button}>
                    Отправить
                </button>
            </div>
        </>
    )
}

const LessonContent = () => {
    const [timeOff, setTimeOff] = useState(false)

    return (
        <div className={styles.wrapper}>
            <div className={styles.lessonContent}>
                <div className={`${styles.timer} ${timeOff ? styles.timerOff : ''}`}>
                    <Timer seconds={15} setTimeToStart={setTimeOff} />
                    <RingIcon />
                </div>
                {/*{!timeOff ? <LessonPlan /> : <HomeworkForm />}*/}
                <LessonPlan />
                <Test />
            </div>
        </div>
    )
}

export default LessonContent
