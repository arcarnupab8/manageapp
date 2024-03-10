import React from 'react';

import style from '../css/details.module.css';

function Details({ date, salary, cost }) {
  return (
    <div className={style.container}>
      <div className={style.dateline}>
        <p>{date}</p>
        <p>{(salary-cost)>0 ? '+' : '-'}{salary-cost}</p>
      </div>
      <div className={style.dataline}>
        <p>เงินเดือน</p>
        <p>+{salary}</p>
      </div>
      <div className={style.dataline}>
        <p>ซื้อของ</p>
        <p>-{cost}</p>
      </div>
    </div>
  )
}

export default Details