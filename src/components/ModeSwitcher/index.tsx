import styles from './ModeSwitcher.module.scss'
import SwitcherButton from '../SwitherButton'
import { swButtons } from '../../utils/constants'
import { SyntheticEvent, useState } from 'react'

const ModeSwitcher = () => {
    const [buttons, setButtons] = useState(swButtons)

    const switchHandler = (event: SyntheticEvent) => {
        const target = event.target as HTMLDivElement
        setButtons(prev => prev.map(el => el.title === target.textContent ? { ...el, active: true } : { ...el, active: false }))
    }

    return (
        <div className={styles.switcher}>
            {
                buttons.map(btn => (
                    <SwitcherButton
                        key={btn.title}
                        title={btn.title}
                        active={btn.active}
                        icon={btn.icon}
                        activeIcon={btn.activeIcon}
                        handler={switchHandler}
                    />
                ))
            }
        </div>
    )
}

export default ModeSwitcher