import { FC, useState } from 'react'
import Navigation from '../UI/Navigation/Navigation'
import MainLogo from '../../assets/logo.svg'
import DropdownMenu from '../UI/DropdownMenu/DropdownMenu'
import MyButton from '../UI/Button/MyButton'
import MySearchInput from '../UI/SearchInput/MySearchInput'
import SearchIcon from '../../assets/searchIcon.svg'
import styles from "./Header.module.scss"
import Modal from '../Modal/Modal'

// Компонент с белым бэкграундом
const PreHeader:FC = () => {
  const [isModalActive, setModalActive] = useState(false);

  const handleModalOpen = () => {
    setModalActive(true);
  };
  const handleModalClose = () => {
    setModalActive(false);
  };
  const options = [
    {
      logo: "🇺🇸",
      name: "USA",
    },
    {
      logo: "🇩🇪",
      name: "Germany",
    },
    {
      logo: "🇫🇷",
      name: "France"
    }
  ]
  return (
    <div className={styles.header}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 140}}>
          <img src={MainLogo} alt="logo" />
          <h2>Jobpilot</h2>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 500, border: "1px solid #E4E5E8", padding: 4, borderRadius: 5}}>
          <DropdownMenu onSelect={() => {}} options={options} />
            <div style={{borderLeft: "1px solid green", height: 16, margin: "0 10px", backgroundColor: "#E4E5E8"}}></div>
          <MySearchInput icon={SearchIcon} placeholder='Job title, keyword, company'/>
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", width: 230}}>
          <MyButton backgroundColor='white' color='#0A65CC' padding='5px 24px' border={'1px solid #CEE0F5'} cursor={'pointer'} height={'48px'} radius={'3px'}>Sign In</MyButton>
          <MyButton backgroundColor='#0A65CC' color='white' padding={'5px 24px'} border={'none'} cursor={'pointer'} height={'48px'} radius={'3px'} onClick={handleModalOpen}>Post a Jobs</MyButton>
          </div>
          {isModalActive && (
          <Modal title="Post Your Job" onClose={handleModalClose}>
            <MySearchInput icon={SearchIcon} placeholder='Job Title'/>
            <MySearchInput icon={SearchIcon} placeholder='Salary'/>
          </Modal>
        )}
        </div>
  )
}

const Header:FC = () => {
  return (
    <div>
        <Navigation />
        <PreHeader />
    </div>
  )
}

export default Header