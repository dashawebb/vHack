import React, { useEffect, useState, Component } from 'react'
import 'react-image-lightbox/style.css' // This only needs to be imported once in your app
import { ReactComponent as SubjectIcon } from '../../assets/img/subject-icon.svg'
import { ReactComponent as ClassIcon } from '../../assets/img/class-icon.svg'
import { ReactComponent as DeadlineIcon } from '../../assets/img/deadline.svg'
import Spinner from '../Shared/Spinner'
import Lightbox from 'react-image-lightbox'
import styles from './Homework.module.less'
import axios from 'axios'

const ToDoRecord = ({ onClick, name, classLetter, subject, deadline }) => {
    return (
        <li className={styles.record} onClick={onClick}>
            <div className={styles.button}></div>
            <div className={styles.block}>
                <p className={styles.name}>{name}</p>
                <div className={styles.meta}>
                    <div className={styles.icons}>
                        <ClassIcon className={styles.icon} />
                        <div className={styles.metaData}>{classLetter}</div>
                    </div>
                    <div className={styles.icons}>
                        <SubjectIcon className={styles.icon} />
                        <div className={styles.metaData}>{subject}</div>
                    </div>
                    <div className={styles.icons}>
                        <DeadlineIcon className={styles.icon} />
                        <div className={styles.metaData}>{deadline}</div>
                    </div>
                </div>
            </div>
        </li>
    )
}

const API1 = 'https://194.87.94.107:5001/assessment/1'
const API2 = 'https://194.87.94.107:5001/assessment/2'

const HomeworkPage = ({ setShowHomework }) => {
    const [isLoading, setIsLoading] = useState(false)
    // const [images, setImages] = useState([])
    const [index, setIndex] = useState(0)
    const [lightboxIsOpen, setIsOpen] = useState(false)

    const images = [
        'https://194.87.94.107:5001/assessment/1',
        'https://194.87.94.107:5001/assessment/2',
    ]

    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        try {
            setIsLoading(true)
            const res1 = await axios.get(`${API1}`)
            const res2 = await axios.get(`${API2}`)
            // setImages(images.concat(res1.data))
            // setImages(images.concat(res2.data))
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.homeworkContainer}>
            {isLoading ? (
                <Spinner />
            ) : (
                <div className={styles.buttons}>
                    <button className={styles.button} onClick={() => setShowHomework(false)}>
                        Вернуться назад
                    </button>
                    <button className={styles.button} onClick={() => setIsOpen(true)}>
                        Просмотреть домашнюю работу
                    </button>
                </div>
            )}
            {lightboxIsOpen && (
                <>
                    <Lightbox
                        mainSrc={images[index]}
                        nextSrc={images[(index + 1) % images.length]}
                        prevSrc={images[(index + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setIndex((index + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() => setIndex((index + 1) % images.length)}
                    />
                </>
            )}
        </div>
    )
}

const Homework = () => {
    const [showHomework, setShowHomework] = useState(false)
    return (
        <div className={styles.content}>
            <div className={styles.wrapper}>
                <p className={styles.title}>Домашняя работа</p>
                {!showHomework ? (
                    <>
                        <p className={styles.check}>Проверить</p>
                        <div className={styles.toDo}>
                            <ul className={styles.toDoList}>
                                <ToDoRecord
                                    onClick={() => setShowHomework(true)}
                                    name={'Иванова Татьяна'}
                                    classLetter={'8А'}
                                    subject={'Биология'}
                                    deadline={'25.03'}
                                />
                                <ToDoRecord
                                    onClick={() => setShowHomework(true)}
                                    name={'Петров Валерий'}
                                    classLetter={'8А'}
                                    subject={'Биология'}
                                    deadline={'25.03'}
                                />
                                <ToDoRecord
                                    onClick={() => setShowHomework(true)}
                                    name={'Кагерманов Рамазан'}
                                    classLetter={'8А'}
                                    subject={'Биология'}
                                    deadline={'25.03'}
                                />
                                <ToDoRecord
                                    onClick={() => setShowHomework(true)}
                                    name={'Тихомиров Даниил'}
                                    classLetter={'8А'}
                                    subject={'Биология'}
                                    deadline={'25.03'}
                                />
                            </ul>
                            <button className={styles.toDoButton}>Просмотрено</button>
                        </div>
                    </>
                ) : (
                    <HomeworkPage setShowHomework={setShowHomework} />
                )}
            </div>
        </div>
    )
}

export default Homework
