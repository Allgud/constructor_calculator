import styles from './EmptyField.module.scss'
import icon from '../../assets/add_icon.png'

const EmptyField = () => {
    return (
        <div className={styles.empty}>
            <img src={icon} alt="Перетащите элемент в эту область" />
            <div className={styles.empty__color_text}>Перетащите сюда</div>
            <div className={styles.empty__text}>любой элемент из левой панели</div>
        </div>
    )
}

export default EmptyField