import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import { ReactComponent as Stat } from '../assets/img/stat.svg'
import { ReactComponent as Calendar } from '../assets/img/calendar.svg'
import { ReactComponent as MailIcon } from '../assets/img/mail.svg'
import { ReactComponent as Camera } from '../assets/img/camera.svg'
import { ReactComponent as HomeworkIcon } from '../assets/img/homework.svg'
import Homework from './Homework/Homework'
import Lesson from './Lesson/Lesson'
import Timetable from './Timetable/Timetable'
import Mail from './Mail/Mail'
import styles from './DashboardPage.module.less'

const API = 'http://194.87.94.107:5000/teacher/'
// const API = 'https://api.github.com/repos/vmg/redcarpet/issues?state=closed'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch()
    }, [])

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    const fetch = async () => {
        try {
            setIsLoading(true)
            const res = await axios.get(`${API}`)
            console.log(res)
            setData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.greeting}>
                <div className={styles.title}>Добрый день, </div>
                <div className={`${styles.name} ${styles.title}`}> Иванова Мария Петровна</div>
            </div>
        </div>
    )
}

const icons = [<Stat />, <Calendar />, <MailIcon />, <Camera />, <HomeworkIcon />]

const NavPanel = ({ selected, selectSection }) => {
    return (
        <div className={styles.navPanel}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.navIcons}>
                {icons.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.button}
                            onClick={() => {
                                selectSection(index)
                            }}
                        >
                            <div
                                key={index}
                                className={selected === index ? styles.selected : ''}
                            >
                                {item}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const contentArray = [<Dashboard />, <Timetable />, <Mail />, <Lesson />, <Homework />]

const Desktop = () => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={styles.container}>
            <NavPanel selected={selectedTab} selectSection={setSelectedTab} />
            {contentArray[selectedTab.toString()]}
        </div>
    )
}

export default Desktop
