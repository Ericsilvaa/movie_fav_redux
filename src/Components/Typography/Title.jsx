export const Title = ({ text, clasName }) => {
  const classNameDefault = clasName ? clasName : ''

  return <h2 className={`${classNameDefault}`}>{text}</h2>
}
