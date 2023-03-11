import styles from './Element.module.scss'
import { ElementProps } from '../../types/types'

const Element = ({ id, cls1, cls2, cls3, draggable, content }: ElementProps) => {
    return (
        <div className={styles.element} draggable={draggable}>
            <div className={styles[cls1]}>
                {
                    content.length === 0
                        ? <div className={styles[cls2]}>
                            <div className={styles[cls3]}>0</div>
                        </div>
                        : content.map(el => (
                            <div className={styles[cls2]} key={el.id}>
                                <div className={styles[cls3]}>{el.text}</div>
                            </div>
                        ))
                }

            </div>
        </div>

    )
}

export default Element