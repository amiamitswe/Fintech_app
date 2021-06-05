import React from 'react'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'

const MyModal = ({ children, show, handleClose, onSubmit }) => {
  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading <FontAwesomeIcon className='ml-2' icon={faSave} /></Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          <FontAwesomeIcon className='mr-2' icon={faTimes} />
          Close
        </Button>
        <Button variant="info" onClick={onSubmit}>
          <FontAwesomeIcon className='mr-2' icon={faSave} />
          Save Balance
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default MyModal
