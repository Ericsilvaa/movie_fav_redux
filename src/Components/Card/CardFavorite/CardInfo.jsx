import styles from './CardFavorite.module.css'

export const CardInfo = ({ title, description }) => {
  return (
    <div className={styles.info}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
