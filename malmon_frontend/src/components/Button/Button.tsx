import s from './Button.module.scss'

export function Button({ children, onClick, type }: { children: any, onClick?: any, type?: any}) {
  return (
    <button className={s.button__button} onClick={onClick} type={type}>{children}</button>
  )
}