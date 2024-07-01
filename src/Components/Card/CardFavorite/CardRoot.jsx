import styles from './CardFavorite.module.css'

export const CardRoot = ({ children }) => {
  return <div className={`${styles.card}`}>{children}</div>
}
