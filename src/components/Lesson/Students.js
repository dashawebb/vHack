import React from "react";
import styles from './Students.module.less'
import axios from "axios";

let students = Array.from({length: 15}, (v, i) => i);

const API = 'http://194.87.94.107:5001/user/'


const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODg0NDQ1NjgsImlhdCI6MTU4ODQzNzM2OCwic3ViIjo3LCJjbGFzcyI6MX0.wqDXzfmQNcswZ_XMf4U4BXjAA0NvS5Xi_GNCINPiRGM'

const authOptions = {
    method: 'POST',
    url: 'http://194.87.94.107:5001/user/',
    headers: {
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODg0NDQ1NjgsImlhdCI6MTU4ODQzNzM2OCwic3ViIjo3LCJjbGFzcyI6MX0.wqDXzfmQNcswZ_XMf4U4BXjAA0NvS5Xi_GNCINPiRGM',
    },
};
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
            const res = await axios.get(API, {
                headers: {
                    'Authorization': token,
                }})
            console.log(res)
            // setData(res.data)
            // setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }


const Students = () => {
    return (
        <div className={styles.students}>
            <div>инфа о уроке</div>
            {students.map((item) => <div className={styles.student}>Андрей</div>
            )}
        </div>
    )
}

export default Students
