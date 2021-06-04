import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import BalanceCart from '../BalanceCart/BalanceCart'
import AddBalance from '../AddBalance/AddBalance'
import classes from './Banner.module.css'

const Banner = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const myModal = <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
    </Button>
    </Modal.Footer>
  </Modal>

  return (
    <div className={classes.Banner}>
      {myModal}
      <Container>
        <Row>
          <Col>
            <h2 className={classes.BannerTitle + ' text-white'}>Wallet</h2>
            <p className={classes.BannerSubTitle + ' text-white'}>Dashboard</p>

            <div className='d-flex'>
              <BalanceCart />
              <BalanceCart />

              <AddBalance onClick={handleShow} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
