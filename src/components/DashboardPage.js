import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ReactComponent as Logo } from '../assets/img/logo.svg'
import { ReactComponent as Stat } from '../assets/img/stat.svg'
import { ReactComponent as Calendar } from '../assets/img/calendar.svg'
import { ReactComponent as MailIcon } from '../assets/img/mail.svg'
import { ReactComponent as Camera } from '../assets/img/camera.svg'
import { ReactComponent as HomeworkIcon } from '../assets/img/homework.svg'
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
            <div className={`${styles.name} ${styles.title}`}> Иванова Мария Петровна</div></div>
        </div>
    )
}

const NavPanel = ({ selectSection }) => {
    return (
        <div className={styles.navPanel}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.navIcons}>
                <div
                    className={styles.icon}
                    onClick={() => {
                        selectSection(0)
                    }}
                >
                    <Stat />
                </div>
                <div
                    className={styles.icon}
                    onClick={() => {
                        selectSection(1)
                    }}
                >
                    <Calendar />
                </div>
                <div
                    className={styles.icon}
                    onClick={() => {
                        selectSection(2)
                    }}
                >
                    <MailIcon />
                </div>
                <div
                    className={styles.icon}
                    onClick={() => {
                        selectSection(3)
                    }}
                >
                    <Camera />
                </div>
                <div
                    className={styles.icon}
                    onClick={() => {
                        selectSection(4)
                    }}
                >
                    <HomeworkIcon />
                </div>
            </div>
        </div>
    )
}

const Timetable = () => {
    return <div className={styles.content}>расписание</div>
}

const Mail = () => {
    return <div className={styles.content}>Личка</div>
}

const Lesson = () => {
    return <div className={styles.content}>Трансляция</div>
}

const Homework = () => {
    return <div className={styles.content}>домашка</div>
}

const contentArray = [<Dashboard />, <Timetable />, <Mail />, <Lesson />, <Homework />]

const DashboardPage = () => {
    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className={styles.container}>
            <NavPanel selectSection={setSelectedTab} />
            <div>{contentArray[selectedTab.toString()]}
            </div>
        </div>
    )
}

export default DashboardPage
