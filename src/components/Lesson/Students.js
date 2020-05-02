import React from "react";
import styles from './Students.module.less'

let students = Array.from({length: 15}, (v, i) => i);

const Students = () => {
    return (
        <div className={styles.students}>
            {students.map((item) => <div className={styles.student}>Андрей</div>
            )}
        </div>
    )
}

export default Students
