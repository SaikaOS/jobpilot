import styles from './MainArticle.module.scss'
import MySearchInput from '../UI/SearchInput/MySearchInput'
import MyButton from '../UI/Button/MyButton'
import Illustration from '../../assets/illustration.png'
import StatsBoxes from '../StatsBoxes/StatsBoxes'
import SearchIcon from '../../assets/searchIcon.svg'
import LocationIcon from '../../assets/locationIcon.svg'
import { FC, useState } from 'react'

// Компонент главной страницы с заголовком, поиском и тд
const MainArticle:FC = () => {
  const [jobTitle, setJobTitle] = useState('')
  const [location, setLocation] = useState('')
  return (
    <main className={styles.main}>
        <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <div className={styles.info}>
            <h1>Find a job that suits your interest & skills.</h1>
            <p style={{lineHeight: '1.5rem'}}>Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.</p>
            <div className={styles.inputs}>
                <MySearchInput icon={SearchIcon} placeholder={"Job title, Keyword..."} value={jobTitle} 
                setValue={setJobTitle}              
                />
                <MySearchInput icon={LocationIcon} placeholder={"Your Location"}
                value={location}
                setValue={setLocation}
                />
                <MyButton backgroundColor='#0A65CC' color='white' padding={'5px 24px'} border={'none'} cursor={'pointer'} height={'48px'} radius={'3px'} onClick={() => console.log(jobTitle, location)}>Find Job</MyButton>
            </div>
            <p style={{fontSize: 12}}>Suggestion: Designer, Programming, Digital Marketing, Video, Animation</p>
        </div>
        <div>
            <img src={Illustration} alt="Illustration" />
        </div>
        </div>
            <StatsBoxes />
    </main>
  )
}

export default MainArticle