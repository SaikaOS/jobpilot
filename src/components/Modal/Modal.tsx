import { FC } from 'react'
import styles from './Modal.module.scss'
import MyButton from '../UI/Button/MyButton';

interface Props  {
    title: string;
    onClose?: () => void;
    children: React.ReactNode | React.ReactNode[];
  }

  // Модальное окно которое появляется при нажатии на кнопку Post Jobs
const Modal:FC<Props> = ({title, onClose, children}) => {
  return (
    <div className={styles.wrapper}>
        <div>
        <p>{title}</p>
        <MyButton color={'blue'} padding={'5px 10px'} border={'none'} cursor={'pointer'} height={'48px'} radius={'5px'} onClick={onClose}>X</MyButton>
        </div>
        {children}
        <MyButton backgroundColor={'#0A65CC'} color={'white'} padding={'5px 20px'} border={'none'} cursor={'pointer'} height={'48px'} radius={'5px'}>Post</MyButton>
    </div>
  )
}

export default Modal