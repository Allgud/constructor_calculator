import styles from './SwitcherButton.module.scss'
import { ISwitcherButton } from '../../types/types'

const SwitcherButton = ({ title, icon, active, activeIcon, handler }: ISwitcherButton) => {

    return (
        <div className={active ? styles.switcher__element_active : styles.switcher__element} onClick={(evt) => { handler(evt) }}>
            <img src={active ? activeIcon : icon} className={styles.switcher__img} />
            <div className={styles.switcher__label}>{title}</div>
        </div>
    )
}

export default SwitcherButton