import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'

const MyModal = (props) => {
  const { children, show, handleClose, onSubmit, cancel, closeText, done, saveText } = props
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading
          {done && <FontAwesomeIcon className='ml-2' icon={done} />}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          {cancel && <FontAwesomeIcon className='mr-2' icon={cancel} />}
          {closeText ? closeText : 'Close'}
        </Button>
        <Button variant="info" onClick={onSubmit}>
          {done && <FontAwesomeIcon className='mr-2' icon={done} />}
          {saveText ? saveText : 'Save'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal
