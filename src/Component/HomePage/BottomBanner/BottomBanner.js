import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import BottomBannerImage from '../../../assets/BottomBanner.png'

const BottomBanner = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={BottomBannerImage} fluid alt='BottomBannerImage' />
        </Col>
      </Row>
    </Container>
  )
}

export default BottomBanner
