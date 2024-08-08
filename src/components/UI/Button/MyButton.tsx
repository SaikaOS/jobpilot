import { FC } from 'react'
import styles from './MyButton.module.scss'

interface MyButtonProps {
  onClick?: () => void,
  children: React.ReactNode,
  backgroundColor?: string,
  color: string,
  padding: string,
  border: string,
  cursor: string,
  height: string,
  radius: string
}

// Кнопка и ее пропы
const MyButton:FC<MyButtonProps> = ({...props}) => {
  return (
    <button className={styles.btn} style={{backgroundColor: props.backgroundColor, padding: props.padding, border: props.border, color: props.color, cursor: props.cursor, height: props.height, borderRadius: props.radius, fontWeight: 600}} onClick={props.onClick}>{props.children}</button>
  )
}

export default MyButton