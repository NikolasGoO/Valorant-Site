import styles from 'styles/home.module.scss'
import { Header } from 'components/header'
import { Main } from 'components/main'

const HomePage = () => (
  <div className={styles.container}>
    <Header />
    <Main />
  </div>
)

export default HomePage
