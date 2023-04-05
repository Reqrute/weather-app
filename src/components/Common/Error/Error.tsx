import React, { Component, type ErrorInfo } from 'react'
import { type Props, type State } from './interface'
import { ErrorContainer, ErrorTitle, ErrorMessage } from './styled'

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    errorInfo: '',
    error: ''
  }

  public static getDerivedStateFromError (_: Error): State {
    return { hasError: true }
  }

  public componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render (): React.ReactNode {
    if (this.state.hasError ?? false) {
      return (<ErrorContainer> <ErrorTitle>Sorry.. there was an error:{this.state.error}</ErrorTitle><ErrorMessage>{this.state.errorInfo}</ErrorMessage></ErrorContainer>)
    }

    return this.props.children
  }
}

export default ErrorBoundary
