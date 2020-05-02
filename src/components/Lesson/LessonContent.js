import styles from "./LessonContent.module.less";
import React from "react";

const LessonContent = () => {
    return (
        <div className={styles.lessonContent}>
            <div>Таймер</div>
            <div>Значение, строение и функционирование нервной системы.</div>
            <div>Чеклист урока</div>
            <div>Нервная система</div>
        </div>
    )
}

export default LessonContent
