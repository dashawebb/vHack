import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styles from './DashboardPage.module.less'

const API = ''

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        // fetch()
    }, [])

    useEffect(() => {
        console.log(data)
    }, [data])

    const fetch = async () => {
        try {
            setIsLoading(true)
            let res = await axios.get(`${API}`);
            setData(res.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <span className={styles.title}>Приветики</span>
        </div>
    )
}

const DashboardPage = () => {
    return (
        <div className={styles.container}>
            <Dashboard />
        </div>
    )
}

export default DashboardPage
