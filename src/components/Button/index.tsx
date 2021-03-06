import React from 'react'
import styled, { css } from 'styled-components'
import palette from '../../themes/palette'
import colorControler from '../../helpers/colorControler'

// Types
type Props = {
  children?: React.ReactNode

  /**
   * 버튼의 종류 'primary' | 'dashed' | 'link' | 'default'
   */
  variant?: 'primary' | 'dashed' | 'link' | 'default'

  /**
   * 버튼의 크기 'large' | 'small' | 'default'
   */
  size?: 'large' | 'small' | 'default'

  /**
   *  버튼이 부모 영역을 모두 차지 할 것 인지 여부
   */
  block?: boolean

  /**
   * 비활성화 여부
   */
  disabled?: boolean

  /**
   * 버튼 모양 'round' | 'circle' | 'default'
   */
  shape?: 'round' | 'circle' | 'default'

  /**
   * 버튼에 사용 할 Icon
   */
  icon?: React.ReactNode

  /**
   * 링크
   */
  href?: string

  /**
   * Icon만 있는 버튼을 사용할지 여부
   */
  onlyIcon?: boolean

  /**
   * 버튼 타입 'submit' | 'button'
   */
  htmlType?: 'submit' | 'button'
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  loading?: boolean
}

// Constants
const BUTTON_PADDING_PER_SIZE = {
  default: '7px 16px',
  small: '2px 7px',
  large: '10px 18px',
}
const BUTTON_RADIUS = {
  circle: '50%',
  round: '30px',
}

const BUTTON_BORDER = {
  primary: `1px solid ${palette.button.primary}`,
  link: 'none',
  dashed: `1px dashed ${palette.button.outline}`,
  default: `1px solid ${palette.button.outline}`,
}

//   Function
const buttonBorder = ({ variant, disabled }: Props) => {
  if (variant === 'primary' && disabled) return BUTTON_BORDER['default']
  return BUTTON_BORDER[variant]
}

const buttonBackground = ({ variant, disabled }: Props) => {
  if (disabled) return palette.button.disabled
  if (variant === 'primary') return palette.button.primary
  return palette.button.white
}

const buttonTextColor = ({ variant, disabled }: Props) => {
  if (variant === 'primary' && !disabled) return palette.button.white
  return palette.button.text
}

const buttonHoverBackground = ({ variant, disabled, loading }: Props) => {
  if (variant !== 'primary' || disabled || loading) return
  return colorControler(palette.button.primary, -20)
}

const buttonHoverColor = ({ variant, disabled, loading }: Props) => {
  if (variant === 'primary' || disabled || loading) return
  return palette.button.primary
}

const buttonPadding = ({ size, onlyIcon }: Props) => {
  if (onlyIcon) return '7px'
  return BUTTON_PADDING_PER_SIZE[size]
}

const buttonBorderRadius = ({ shape }: Props) => {
  return BUTTON_RADIUS[shape]
}

const buttonBlock = ({ block }: Props) => (block ? { display: 'block', width: '100%' } : { display: 'inline-flex' })
const buttonCursor = ({ disabled }: Props) => (disabled ? 'not-allowed' : 'pointer')

const styles = css`
  position: relative;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  ${buttonBlock}

  align-items: center;

  outline: none;

  padding: ${buttonPadding};
  cursor: ${buttonCursor};

  background: ${buttonBackground};
  color: ${buttonTextColor};
  border: ${buttonBorder};
  border-radius: ${buttonBorderRadius};

  transition: 0.2s;

  &:hover {
    background: ${buttonHoverBackground};
    color: ${buttonHoverColor};
    border-color: ${buttonHoverColor};
  }
`
/**
 * Dummy Link
 * 나중에 next link 또는 react router link 로 변경하여 사용
 */
const DummyLink = ({ ...props }) => <a {...props}></a>

const AnchorButton = styled(DummyLink)<Props>`
  ${styles}
  text-decoration: none;
`

const NoramlButton = styled.button<Props>`
  ${styles}
`
const Space = styled.span`
  margin: 0 3px;
`

function Button({ children, htmlType, ...props }: Props) {
  const { loading, disabled, icon, href, variant } = props

  /**
   * Icon만 있는 경우
   */
  const onlyIcon = icon && !children

  /**
   * Text 와 Icon 이 같이 있는지 여부
   */
  const hasIconWithText = icon && children

  /**
   * 버튼 disabled 여부
   */
  const isDisabled = loading || disabled

  /**
   * Link Button ?
   */
  const isAnchorButton = variant === 'link' || href

  return (
    <>
      {isAnchorButton ? (
        <AnchorButton {...props} href={href}>
          {children}
        </AnchorButton>
      ) : (
        <NoramlButton type={htmlType} disabled={isDisabled} onlyIcon={onlyIcon} {...props}>
          {icon}
          {/* 아이콘과 텍스트가 함께 있는 경우 여백 추가 */}
          {hasIconWithText && <Space />}
          {children}
        </NoramlButton>
      )}
    </>
  )
}

Button.defaultProps = {
  variant: 'default',
  size: 'default',
  block: false,
  disabled: false,
  htmlType: 'button',
  shape: 'default',
  onlyIcon: false,
  loading: false,
}

export default Button
