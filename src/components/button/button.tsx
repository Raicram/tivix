import styles from './button.module.scss'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode,
  type?: 'submit' | 'button',
  disabled?: boolean
}

export const Button = ({children, type ,disabled = false}: ButtonProps) => (
<button disabled={disabled} className={styles.button} type={type || 'button'}>
    {children}
</button>
)