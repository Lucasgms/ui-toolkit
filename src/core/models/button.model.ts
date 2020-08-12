export interface IButton {
  /**  'default' | 'primary' | 'secondary' */
  color?: 'default' | 'primary' | 'secondary'
  /** boolean */
  disabled?: boolean
  /** href <a> */
  href?: string
  /** 'large' | 'medium' | 'small' */
  size?: 'large' | 'medium' | 'small'
  /** 'filled' | 'outlined' | 'text' */
  variant?: 'filled' | 'outlined' | 'text'
}