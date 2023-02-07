import styles from './Items.module.css'
import Image from '../../Assets/chowmin.webp'
import { Button } from '@mui/material'
const Items = () => {
    return (
        <div className={`${styles.items} ${styles.center}`}>
            <img src={Image} alt="" />
            <div className={`${styles.items__name}`}>
                <p>Lorem, ipsum dolor.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={`${styles.items__add} ${styles.center}`}>
                <div>
                    <p>Quantity</p>
                    <input type="number" />
                </div>
                <Button variant="outlined">+ADD</Button>
            </div>
        </div>
    )
}

export default Items