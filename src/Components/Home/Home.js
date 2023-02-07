import Items from '../Items/Items'
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={`${styles.home__wrapper} `}>
            <div className={`${styles.home}`}>
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
            </div>
        </div>
    )
}

export default Home