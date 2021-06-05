import { Col, Container, Image, Row } from 'react-bootstrap'
import GetAppImage from '../../../assets/BottomBanner.png'

const GetApp = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image src={GetAppImage} fluid alt='BottomBannerImage' />
        </Col>
      </Row>
    </Container>
  )
}

export default GetApp
