import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ message }) => {
  const style = {
    position: 'fixed',
    zIndex: '9999',
    top: '70px',
    right: '70px',
  }
  return (
    <Alert style={style} variant="danger">
      <Alert.Heading className='mb-0'>{message}</Alert.Heading>
    </Alert>
  )
}

export default ErrorMessage
