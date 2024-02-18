import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../css/income.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Manageincome() {
  const [money, setMoney] = useState('1000000');
  const [sumdata, setSumdata] = useState({ income: 1000.9, expenses: 1010.9 });
  const [data, setData] = useState({
    month1: "ก.พ.", year1: 2024, date1: 27, salary1: 10000, cost1: 3000,
    month2: "ก.พ.", year2: 2024, date2: 28, salary2: 10000, cost2: 4000,
    month3: "มี.ค.", year3: 2024, date3: 5, salary3: 10000, cost3: 1000,
    month4: "มี.ค.", year4: 2024, date4: 7, salary4: 10000, cost4: 2000
  })
  const summoney = sumdata.income-sumdata.expenses;
  const currentYear = new Date().getFullYear();
  const years = [currentYear];
  for (let i = 1; i <= 10; i++) {
    years.push(currentYear - i);
  }
  
  return (
    <div className={style.container}>
      <div className={style.head}>
        <div className={style.title}>ยอดเงินคงเหลือ</div>
        <div className={style.amount_money}>B {money}</div>
      </div>

      <div className={style.filter_year}>
        {years.map((year) => (
          <div key={year}>{year===currentYear ? 'ปัจจุบัน' : year}</div>
        ))}
      </div>

      <div className={style.content}>
        <div className={style.headcontent}>
          <div className={style.summary}>
            <div className={style.left}>
              <p>รายรับ</p>
              <p>รายจ่าย</p>
              <p>สรุป</p>
            </div>
            <div className={style.right}>
              <p>+{sumdata.income}</p>
              <p>-{sumdata.expenses}</p>
              <p>{summoney}</p>
            </div>
          </div>
          <div className={style.mode}>
            <div className={style.addoption}>
              <FontAwesomeIcon className={style.icon} icon={faCirclePlus}/>
              <Link to='/add_option'>เพิ่มรายการ</Link>
              </div>
            <div className={style.line}></div>
            <div className={style.searchoption}>
              <FontAwesomeIcon className={style.icon} icon={faMagnifyingGlass}/>
              <Link to='/search_option'>ค้นหา</Link>
              </div>
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

    </div>
  )
}

export default Manageincome