import styles from './App.module.scss'
import Board from '../Board'
import ModeSwitcher from '../ModeSwitcher'

function App() {

  return (
    <div className={styles.app}>
      <ModeSwitcher />
      <Board />
    </div>
  )
}

export default App
