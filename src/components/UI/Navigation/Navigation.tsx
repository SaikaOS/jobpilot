import { FC } from 'react'
import PhoneCallLogo from "../../../assets/phone_call.svg"
import styles from "./Navigation.module.scss"
import DropdownMenu from '../DropdownMenu/DropdownMenu'
import { NavLink } from 'react-router-dom'

// Компонент навигации b ссылок
const Navigation:FC = () => {
    const navLinks = [
      {
        link: "/",
        name: "Home"
      },
      {
        link: "/jobs",
        name: "Find Job"
      },
      {
        link: "/employers",
        name: "Employers"
      },
      {
        link: "/candidates",
        name: "Candidates"
      },
      {
        link: "/pricing",
        name: "Pricing Plans" 
      },
      {
        link: "/support",
        name: "Customer Supports"
      }
    ]
    const classNameFunc = ({ isActive }: {isActive: boolean}) => (isActive ? styles.active : "");
    const options = [
      {
        logo: "🇺🇸",
        name: "English",
      },
      {
        logo: "🇩🇪",
        name: "German",
      },
      {
        logo: "🇫🇷",
        name: "French"
      }
    ]
      const handleSelect = (value: string) => {
        console.log('Selected value:', value);
      };
  return (
    <div className={styles.navigation}>
        <nav className={styles.links}>
        {navLinks.map((link, index) => <NavLink to={link.link} className={classNameFunc} key={index}>
        {link.name}
        </NavLink>)}
        </nav>
        <div className={styles.contact}>
        <img src={PhoneCallLogo} alt="logo" />
        <p>+1-202-555-0178</p>
        <DropdownMenu options={options} onSelect={handleSelect} />
        </div>
    </div>
  )
}

export default Navigation