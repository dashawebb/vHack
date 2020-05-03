import React from 'react';
import styles from '../Students.module.less'

 const ConnectionStatus = ({ connected }) => {
     return (
         <div className={styles.online}>
             <strong>Статус:</strong> {connected ? 'Подключено' : 'Отключено'}
         </div>
     );
 };

export default ConnectionStatus
