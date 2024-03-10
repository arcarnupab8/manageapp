import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer,faComment,faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import style from '../css/searchoption.module.css';
import Details from './Details';
import { dataMoneyFeb, dataMoneyMarch } from './data';


function Searchoption() {
  const [data, setData] = useState({
    month1: "ก.พ.", year1: 2024, date1: 27, salary1: 10000, cost1: 3000,
    month2: "ก.พ.", year2: 2024, date2: 28, salary2: 10000, cost2: 4000,
    month3: "มี.ค.", year3: 2024, date3: 5, salary3: 10000, cost3: 1000,
    month4: "มี.ค.", year4: 2024, date4: 7, salary4: 10000, cost4: 2000
  })

  const calculateMoneyMonth = (data) => {
    let MoneyMonth = 0;
    data.salary.map((item, index) => (
      MoneyMonth += item - data.cost[index]
    ));
    return MoneyMonth;
  };
  const calculatecostMonth = (data) => {
    let cost = 0;
    data.cost.map((item, index) => (
      cost += item
    ));
    return cost;
  };

  const moneyFeb = calculateMoneyMonth(dataMoneyFeb);
  const moneyMarch = calculateMoneyMonth(dataMoneyMarch);
  const costFeb =  calculatecostMonth(dataMoneyFeb);
  const costMarch = calculatecostMonth(dataMoneyMarch);

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
              <p className={style.month} >{dataMoneyFeb.month === 2 ? 'ก.พ.' : ' '}</p> 
              <p className={style.year} >{dataMoneyFeb.year === 2024 ? dataMoneyFeb.year : ' '}</p>
            </div> 
            <div className={style.right}>
              <p className={style.salary}>
                {moneyFeb}
              </p>
            </div>
          </div>

          <hr/>

          <div className={style.resultnotes}>
            <div className={style.details}>
              {dataMoneyFeb.month === 2 && dataMoneyFeb.year === 2024 &&
                dataMoneyFeb.salary.map((item, index) => (
                  <Details
                    key={index}
                    date={dataMoneyFeb.date[index]}
                    salary={item}
                    cost={dataMoneyFeb.cost[index]}  
                  />
                ))
              }
            </div>
          </div>

          <hr/>
        
        </div>

        <div className={style.showresults}>
          <div className={style.head}>
            <div className={style.left}>
              <p className={style.month} >{dataMoneyMarch.month === 3 ? 'มี.ค.' : ' '}</p> 
              <p className={style.year} >{dataMoneyMarch.year === 2024 ? dataMoneyFeb.year : ' '}</p>
            </div> 
            <div className={style.right}>
              <p className={style.salary}>{moneyMarch}</p>
            </div>
          </div>

          <hr/>

          <div className={style.resultnotes}>
            <div className={style.details}>
              {dataMoneyMarch.month === 3 && dataMoneyMarch.year === 2024 &&
                dataMoneyMarch.salary.map((item, index) => (
                  <Details
                    key={index}
                    date={dataMoneyMarch.date[index]}
                    salary={item}
                    cost={dataMoneyMarch.cost[index]}  
                  />
                ))
              }
            </div>
          </div>

          <hr/>
            </div>
      </div>

      <div className={style.topButton}>
        <div className={style.button} 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {'^'}
        </div>
      </div>
    </div>
  )
}

export default Searchoption