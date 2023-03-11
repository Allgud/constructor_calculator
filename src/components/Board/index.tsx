import { boards } from '../../utils/constants'
import Leftfield from '../LeftField'
import RightField from '../RightField'
import styles from './Board.module.scss'

const Board = () => {
    return (
        <div className={styles.board}>
            {
                boards.map(board => (
                    board.position === 'left'
                        ? <Leftfield key={board.position} elements={board.components} />
                        : <RightField key={board.position} elements={board.components} />
                ))
            }
        </div>
    )
}

export default Board