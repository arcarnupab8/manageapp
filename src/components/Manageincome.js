import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import style from '../css/income.module.css';
import Details from './Details';
import { dataMoneyFeb, dataMoneyMarch } from './data';

function Manageincome() {
  const [money, setMoney] = useState('1000000');
  const currentYear = new Date().getFullYear();
  const years = [currentYear];
  for (let i = 1; i <= 10; i++) {
    years.push(currentYear - i);
  }
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
              <p>+{moneyFeb+moneyMarch}</p>
              <p>-{costFeb+costMarch}</p>
              <p>{(moneyFeb+moneyMarch)-(costFeb+costMarch)}</p>
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
                  <div className={style.month} >{dataMoneyFeb.month === 2 ? 'ก.พ.' : ' '}</div> 
                  <div className={style.year} >{dataMoneyFeb.year === 2024 ? dataMoneyFeb.year : ' '}</div>
                </div> 
                <div className={style.right}>
                  <div className={style.salary}>
                    {moneyFeb}
                  </div>
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
                  <div className={style.month} >{dataMoneyMarch.month === 3 ? 'มี.ค.' : ' '}</div> 
                  <div className={style.year} >{dataMoneyMarch.year === 2024 ? dataMoneyFeb.year : ' '}</div>
                </div> 
                <div className={style.right}>
                  <div className={style.salary}>{moneyMarch}</div>
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

export default Manageincome