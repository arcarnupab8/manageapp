import React, { useState } from 'react';
import style from "../css/navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet,faDoorOpen,faCoins,faBox,faFilePen } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState('เลือกเมนู');
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.body.classList.add(`${style.menuActiveClass}`); // Apply class to body for global styling
    } else {
      document.body.classList.remove(`${style.menuActiveClass}`); // Remove class from body
    }
  }
  return (
    <nav>
      <div className={`${style.menubar} ${isOpen ? style.menuActive : ''}`} 
      onClick={toggleDropdown}>
        <FontAwesomeIcon className={style.icon} icon={page === 'รายรับ/รายจ่าย' ? faWallet : '' || 
        page === 'กู้ยืม' ? faCoins : '' || page === 'ออกบิล' ? faFileLines : ''||
        page === 'สต็อก' ? faBox : '' || page === 'บันทึกเวลา' ? faFilePen : ''} />
        {page} {isOpen ? 'v' : '^'}
        {isOpen && (
          <ul className={style.dropdownmenu}>
            <li onClick={()=> setPage('รายรับ/รายจ่าย')}><Link to='/manageincome'><FontAwesomeIcon icon={faWallet} className={style.icon}/>รายรับ/รายจ่าย</Link></li>
            <li onClick={()=> setPage('กู้ยืม')}><Link to='/manageborrow'><FontAwesomeIcon icon={faCoins} className={style.icon}/>กู้ยืม</Link></li>
            <li onClick={()=> setPage('ออกบิล')}><Link to='/managebill'><FontAwesomeIcon icon={faFileLines} className={style.icon}/>ออกบิล</Link></li>
            <li onClick={()=> setPage('สต็อก')}><Link to='/managestock'><FontAwesomeIcon icon={faBox} className={style.icon}/>สต็อก</Link></li>
            <li onClick={()=> setPage('บันทึกเวลา')}><Link to='/managetime'><FontAwesomeIcon icon={faFilePen} className={style.icon}/>บันทึกเวลา</Link></li>
          </ul>
        )}
      </div>
      <div className={style.navlist}>
        <div className={style.link} onClick={()=> setPage('รายรับ/รายจ่าย')}><Link to='/manageincome'><FontAwesomeIcon icon={faWallet} className={style.icon}/>รายรับ/รายจ่าย</Link></div>
        <div className={style.line}></div>
        <div className={style.link} onClick={()=> setPage('กู้ยืม')}><Link to='/manageborrow'><FontAwesomeIcon icon={faCoins} className={style.icon}/>กู้ยืม</Link></div>
        <div className={style.line}></div>
        <div className={style.link} onClick={()=> setPage('ออกบิล')}><Link to='/managebill'><FontAwesomeIcon icon={faFileLines} className={style.icon}/>ออกบิล</Link></div>
        <div className={style.line}></div>
        <div className={style.link} onClick={()=> setPage('สต็อก')}><Link to='/managestock'><FontAwesomeIcon icon={faBox} className={style.icon}/>สต็อก</Link></div>
        <div className={style.line}></div>
        <div className={style.link} onClick={()=> setPage('บันทึกเวลา')}><Link to='/managetime'><FontAwesomeIcon icon={faFilePen} className={style.icon}/>บันทึกเวลา</Link></div>
        <div className={style.line}></div>
      </div>
      <div className={style.signout_btn}> <FontAwesomeIcon icon={faDoorOpen}/>ออกจากระบบ</div>
    </nav>
  )
}

export default Navbar