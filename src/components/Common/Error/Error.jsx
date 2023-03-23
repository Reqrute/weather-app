import React from 'react'

// interface ErrorProps {
//   error: Error;
// }

export const Error = (error) => {
  return (
    <>
      <div className="error-container">
        <div className="error-title">Error</div>
        <div className="error-message">{error.message}</div>
      </div>
    </>
  )
}

export const ErrorHandler = (
  error,
  info
) => {
  console.error(error)
}
