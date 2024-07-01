export const CardDate = ({ text, className }) => {
  const classNameDefault = className ? className : ''

  return <span className={`${classNameDefault}`}>{text}</span>
}
