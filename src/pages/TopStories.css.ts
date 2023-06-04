import { style } from '@vanilla-extract/css'

export const list = style({
  listStyle: 'none'
})

export const infinityScrollButton = style({
  marginLeft: '2.5rem',
  cursor: 'pointer',
  fontSize: '1rem',
  display: 'flex',
  marginBottom: '2rem',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '6px 14px',
  borderRadius: '6px',
  border: 'none',
  color: '#fff',
  background: 'linear-gradient(180deg, #4B91F7 0%, #367AF6 100%)',
  backgroundOrigin: 'border-box',
  boxShadow:
    '0px 0.5px 1.5px rgba(54, 122, 246, 0.25), inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2)',
  userSelect: 'none',
  touchAction: 'manipulation',
  ':focus': {
    boxShadow:
      'inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1.5px rgba(54, 122, 246, 0.25), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5)',
    outline: 0
  }
})
