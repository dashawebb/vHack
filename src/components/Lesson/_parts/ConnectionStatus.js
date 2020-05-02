import React from 'react';

 const ConnectionStatus = ({ connected }) => {
     return (
         <div>
             <strong>Статус:</strong> {connected ? 'Подключено' : 'Отключено'}
         </div>
     );
 };

export default ConnectionStatus
