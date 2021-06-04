import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import classes from './Footer.module.css'

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className={classes.Footer + ' d-flex align-items-center justify-content-between'}>
            <p className={classes.Text}>Copyright © 2017 - 2020 Fintech Pte. Ltd. All rights reserved.</p>
            <div>
              <Link className={classes.Text} to='/'>Legal</Link>
              <span className={classes.Text + ' mx-2'}>|</span>
              <Link className={classes.Text} to='/'>Privacy</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
