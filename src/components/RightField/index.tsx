import styles from './Rightfield.module.scss'
import { IFieldProps } from '../../types/types'
import EmptyField from '../EmptyField'

const RightField = ({ elements }: IFieldProps) => {
    return (
        <div className={styles.rightfield}>
            <EmptyField />
        </div>
    )
}

export default RightField