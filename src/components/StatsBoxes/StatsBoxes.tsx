import { FC } from 'react'
import stats1 from '../../assets/stats1.svg'
import stats2 from '../../assets/stats2.svg'
import stats3 from '../../assets/stats3.svg'
import stats4 from '../../assets/stats4.svg'
import styles from './StatsBoxes.module.scss'


// Компонент Статистика вакансий
const StatsBoxes:FC = () => {
  return (
    <div className={styles.container}>
         <div className={styles.box}>
             <img src={stats1} alt="1" />  
             <div className={styles.stats}>
             <p className={styles.nums}>1,75,324</p> 
             <p className={styles.title}>Live Job</p>
             </div>
        </div>
        <div className={styles.box}>
             <img src={stats2} alt="2" />  
             <div className={styles.stats}>
             <p className={styles.nums}>97,354</p> 
             <p className={styles.title}>Companies</p>
             </div>
        </div>
        <div className={styles.box}>
             <img src={stats3} alt="3" />  
             <div className={styles.stats}>
             <p className={styles.nums}>38,47,154</p> 
             <p className={styles.title}>Candidates</p>
             </div>
        </div>
        <div className={styles.box}>
             <img src={stats4} alt="4" />  
             <div className={styles.stats}>
             <p className={styles.nums}>7,532</p> 
             <p className={styles.title}>New Jobs</p>
             </div>
        </div>
    </div>
  )
}

export default StatsBoxes