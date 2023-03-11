import styles from './Leftfield.module.scss'
import { IFieldProps } from '../../types/types'
import Element from '../Element'

const Leftfield = ({ elements }: IFieldProps) => {
    return (
        <div className={styles.leftfield}>
            {
                elements.map(el => (
                    <Element
                        key={el.id}
                        cls1={el.cls1}
                        cls2={el.cls2}
                        cls3={el.cls3}
                        draggable={el.draggable}
                        id={el.id}
                        content={el.content}
                    />
                ))
            }
        </div>
    )
}

export default Leftfield