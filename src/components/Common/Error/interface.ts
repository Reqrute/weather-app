import { type ReactNode } from 'react'

export interface Props {
  children?: ReactNode
}

export interface State {
  hasError?: boolean
  errorInfo?: string
  error?: string
}
