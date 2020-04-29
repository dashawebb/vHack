import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./DashboardPage.module.css";
import { ReactComponent as Logo } from "../assets/img/logo.svg";
import { ReactComponent as Stat } from "../assets/img/stat.svg";
import { ReactComponent as Calendar } from "../assets/img/calendar.svg";
import { ReactComponent as Mail } from "../assets/img/mail.svg";
import { ReactComponent as Camera } from "../assets/img/camera.svg";
import { ReactComponent as Homework } from "../assets/img/homework.svg";

const API = "http://194.87.94.107:5000/teacher/";
// const API = 'https://api.github.com/repos/vmg/redcarpet/issues?state=closed'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    const fetch = async () => {
        try {
            setIsLoading(true);
            let res = await axios.get(`${API}`);
            console.log(res);
            setData(res.data);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <span className={styles.title}>прив</span>
        </div>
    );
};

const NavPanel = () => {
    return (
        <div className={styles.navPanel}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.navIcons}>
                <div className={styles.icon} onClick={() => {}}>
                    <Stat />
                </div>
                <div className={styles.icon} onClick={() => {}}>
                    <Calendar />
                </div>
                <div className={styles.icon} onClick={() => {}}>
                    <Mail />
                </div>
                <div className={styles.icon} onClick={() => {}}>
                    <Camera />
                </div>
                <div className={styles.icon} onClick={() => {}}>
                    <Homework />
                </div>
            </div>
        </div>
    );
};

const DashboardPage = () => {
    return (
        <div className={styles.container}>
            <NavPanel />
            <Dashboard />
        </div>
    );
};

export default DashboardPage;
