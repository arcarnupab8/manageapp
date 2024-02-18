import React from 'react';
import style from '../css/addoption.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar,faMoneyBillTransfer,faComment,faFileLines,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Addoption() {
  return (  
    <div className={style.container}>
      <div className={style.head}>
        <div><Link to='/manageincome'>{'<'}</Link>เพิ่มรายการ</div>
      </div>

      <div className={style.content}>
        <div className={style.input_money}>
          <div className={style.input}>
            <FontAwesomeIcon className={style.icon} icon={faSackDollar}/>
            <input
              type='text'
              placeholder='0'
            />
          </div>
        </div>

        <div className={style.input_choice}>
          <div className={style.input}>
            <FontAwesomeIcon className={style.icon} icon={faMoneyBillTransfer}/>
            <select className={style.choice}>
              <option>รายรับ</option>
              <option>รายจ่าย</option>
            </select>
          </div>
        </div>

        <div className={style.input_title}>
          <div className={style.input}>
            <FontAwesomeIcon className={style.icon} icon={faComment}/>
            <input
              type='text'
              placeholder='Title'
            />
          </div>
        </div>

        <div className={style.input_detail}>
          <div className={style.input}>
            <FontAwesomeIcon className={style.icon} icon={faFileLines}/>
            <textarea className={style.detail} rows='3' cols='90' placeholder='Detail' />
          </div>
        </div>

        <div className={style.input_datetime} >
          <div className={style.input}>
            <FontAwesomeIcon className={style.icon} icon={faCalendar}/>
            <input
              type='date'
            />
          </div>
        </div>

        <div className={style.button}>
          <div className={style.submitbtn}>บันทึก</div>
          <div className={style.cancelbtn}>ยกเลิก</div>
        </div>
      </div>
    </div>
  )
}

export default Addoption