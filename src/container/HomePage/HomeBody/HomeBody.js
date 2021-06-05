import React, { useCallback, useContext, useEffect, useState } from 'react'
import { store } from '../../../context/store'
import { ACTIVITY_DATA, PENDING_DATA } from '../../../context/actionTypes/actionTypes'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import ActionCart from '../ActionCart/ActionCart'
import Activity from '../Activity/Activity'
import fetchData from '../../../Utility/fetchData'
import { actionLink, activity, pending } from '../../../Utility/library'
import classes from './HomeBody.module.css'

const HomeBody = () => {
  const { balance, balanceDispatch } = useContext(store)
  const [key, setKey] = useState('recent');

  // fetch activity data info
  const fetchActivity = useCallback(async () => {
    try {
      const pendingData = pending
      fetchData(balanceDispatch, PENDING_DATA, pendingData)
    }
    catch (error) {
      throw new Error()
    }
  }, [balanceDispatch])

  // fetch pending data info
  const fetchPending = useCallback(async () => {
    try {
      const data = activity
      fetchData(balanceDispatch, ACTIVITY_DATA, data)
    }
    catch (error) {
      throw new Error()
    }
  }, [balanceDispatch])

  // fetch data if empty using useEffect
  useEffect(() => {
    if (balance.activityData.length === 0) fetchActivity()
    if (balance.pendingData.length === 0) fetchPending()
  }, [fetchActivity, balance.activityData.length, fetchPending, balance.pendingData.length])

  return (
    <div className={classes.HomeBody}>
      <Container >
        <Row>
          <Col md={4}>
            <p className={classes.ActionTitle}>Action</p>
            <div className='d-flex flex-wrap justify-content-md-start justify-content-between'>
              {actionLink.map(el => <ActionCart key={el.id} name={el.name} link={el.link} icon={el.icon} />)}
            </div>
          </Col>

          <Col md={8}>
            <p className={classes.ActionTitle}>Recent activity</p>
            <div className={classes.Activity}>
              <button onClick={() => console.log('Clicked')} className={classes.ShowAll}>View all</button>
              <Tabs className={classes.Tabs} activeKey={key} onSelect={(k) => setKey(k)} variant='pills'>
                <Tab eventKey="recent" title="Recent" tabClassName='ActionTab'>
                  <Activity data={balance.activityData} />
                </Tab>
                <Tab eventKey="pending" title="Pending" tabClassName='ActionTab'>
                  <Activity data={balance.pendingData} />
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default HomeBody
