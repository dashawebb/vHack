import React, { useState } from 'react'
import styles from './Students.module.less'
import { ReactComponent as Mute } from '../../assets/img/mute.svg'
import { ReactComponent as Unmute } from '../../assets/img/unmute.svg'
import { ReactComponent as Like } from '../../assets/img/like.svg'
import axios from 'axios'

// let students = Array.from({ length: 15 }, (v, i) => i)

const API = 'http://194.87.94.107:5000/user/'

const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODg0NDQ1NjgsImlhdCI6MTU4ODQzNzM2OCwic3ViIjo3LCJjbGFzcyI6MX0.wqDXzfmQNcswZ_XMf4U4BXjAA0NvS5Xi_GNCINPiRGM'

const authOptions = {
    method: 'POST',
    url: 'http://194.87.94.107:500/user/',
    headers: {
        Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODg0NDQ1NjgsImlhdCI6MTU4ODQzNzM2OCwic3ViIjo3LCJjbGFzcyI6MX0.wqDXzfmQNcswZ_XMf4U4BXjAA0NvS5Xi_GNCINPiRGM',
    },
}
// return dispatch => {
//     return axios(authOptions)
//         .then(function(response){
//             console.log(response.data);
//             console.log(response.status);
//         })
//         .catch(function(error){
//             console.log(error);
//         });

const fetch = async () => {
    try {
        // setIsLoading(true)
        const res = await axios.post(API)
        console.log(res)
        // setData(res.data)
        // setIsLoading(false)
    } catch (error) {
        console.log(error)
    }
}

const students = [
    'Анна Петрушкина',
    'Иван Комиссаров',
    'Никита Иванов',
    'Павел Соловьев',
    'Валерия Петрова',
    'Жанна Артемова',
    'Андрей Тряпочкин',
    'Павел Соловьев',
    'Валерия Петрова',
    'Жанна Артемова',
    'Андрей Тряпочкин',
    'Жанна Артемова',
    'Андрей Тряпочкин',
]

const Students = () => {
    const [isMuted, changeMute] = useState(false)

    return (
        <div className={styles.students}>
            <div className={styles.lessonStat}>
                <div className={styles.circle}>
                    <p className={styles.text}>8A</p>
                </div>
                <div className={styles.stat}>
                    <div className={styles.online}>онлайн</div>
                    <div className={styles.text}>15/17</div>
                </div>
            </div>
            {students.map((item) => (
                <div key={`${item} ${Math.random()}`} style={{ display: 'flex' }}>
                    <div className={styles.student}>
                        {item}
                        <div className={styles.icons}>
                            {isMuted ? (
                                <Unmute onClick={() => changeMute(false)} />
                            ) : (
                                <Mute onClick={() => changeMute(true)} />
                            )}
                            <Like />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Students
