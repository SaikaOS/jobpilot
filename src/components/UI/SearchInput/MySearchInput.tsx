import { FC } from 'react'
import styles from "./MySearchInput.module.scss"

interface InputProps {
  placeholder?: string,
  icon?: string,
  value?: string | number,
  setValue?: any
}
// Компонент поиска
const MySearchInput:FC<InputProps> = ({placeholder, icon, value, setValue}) => {
  return (
    <div className={styles.container}>
      <img src={icon} alt="icon" />
      <input type="search" className={styles.input} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}/>
    </div>
  )
}

export default MySearchInput