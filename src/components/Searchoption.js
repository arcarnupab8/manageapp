import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer,faComment,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from '../css/searchoption.module.css';


function Searchoption() {
  const [data, setData] = useState({
    month1: "ก.พ.", year1: 2024, date1: 27, salary1: 10000, cost1: 3000,
    month2: "ก.พ.", year2: 2024, date2: 28, salary2: 10000, cost2: 4000,
    month3: "มี.ค.", year3: 2024, date3: 5, salary3: 10000, cost3: 1000,
    month4: "มี.ค.", year4: 2024, date4: 7, salary4: 10000, cost4: 2000
  })
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div><Link to='/manageincome'>{'<'}</Link>ค้นหา</div>
      </div>

      <div className={style.filter}>
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

        <div className={style.input_datetime} >
          <div className={style.input}>
            <FontAwesomeIcon className={style.icon} icon={faCalendar}/>
            <input
              type='date'
            />
            <div>ถึง</div>
            <input
              type='date'
            />
          </div>
        </div>

        <div className={style.button}>
          <div className={style.searchbtn}>ค้นหา</div>
        </div>
      </div>

      <div className={style.results}>
            <div className={style.showresults}>
              <div className={style.head}>
                <div className={style.left}>
                  <p className={style.month} >{data.month1}</p> 
                  <p className={style.year} >{data.year1}</p>
                </div> 
                <div className={style.right}>
                  <p className={style.salary}>{(data.salary1-data.cost1)+(data.salary2-data.cost2)}</p>
                </div>
              </div>

              <hr/>

              <div className={style.resultnotes}>
                <div className={style.details}>
                    <div className={style.dateline} >
                      <p>{data.date1}</p>
                      <p>{(data.salary1-data.cost1)>0 ? '+' : '-'}{data.salary1-data.cost1}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>เงินเดือน</p>
                      <p>+{data.salary1}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>ซื้อของ</p>
                      <p>-{data.cost1}</p>
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.dateline} >
                      <p>{data.date2}</p>
                      <p>{(data.salary2-data.cost2)>0 ? '+' : '-'}{data.salary2-data.cost2}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>เงินเดือน</p>
                      <p>+{data.salary2}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>ซื้อของ</p>
                      <p>-{data.cost2}</p>
                    </div>
                </div>
              </div>

              <hr/>
            </div>

            <div className={style.showresults}>
              <div className={style.head}>
                <div className={style.left}>
                  <p className={style.month} >{data.month3}</p> 
                  <p className={style.year} >{data.year3}</p>
                </div> 
                <div className={style.right}>
                  <p className={style.salary}>{(data.salary3-data.cost3)+(data.salary4-data.cost4)}</p>
                </div>
              </div>

              <hr/>

              <div className={style.resultnotes}>
                <div className={style.details}>
                    <div className={style.dateline} >
                      <p>{data.date3}</p>
                      <p>{(data.salary3-data.cost3)>0 ? '+' : '-'}{data.salary3-data.cost3}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>เงินเดือน</p>
                      <p>+{data.salary3}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>ซื้อของ</p>
                      <p>-{data.cost3}</p>
                    </div>
                </div>
                <div className={style.details}>
                    <div className={style.dateline} >
                      <p>{data.date4}</p>
                      <p>{(data.salary4-data.cost4)>0 ? '+' : '-'}{data.salary4-data.cost4}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>เงินเดือน</p>
                      <p>+{data.salary4}</p>
                    </div>
                    <div className={style.dataline}>
                      <p>ซื้อของ</p>
                      <p>-{data.cost4}</p>
                    </div>
                </div>
              </div>

              <hr/>
            </div>
      </div>
    </div>
  )
}

export default Searchoption