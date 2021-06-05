import { faFunnelDollar, faHandHoldingUsd, faHryvnia, faWallet } from '@fortawesome/free-solid-svg-icons'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Tabs, Tab } from 'react-bootstrap'
import ActionCart from '../ActionCart/ActionCart'
import classes from './HomeBody.module.css'
import Activity from '../Activity/Activity'
import { store } from '../../../context/store'
import { ACTIVITY_DATA, PENDING_DATA } from '../../../context/actionTypes/actionTypes'
import fetchData from '../../../Utility/fetchData'


const activity = [
  {
    _id: 1001, date: 'Today, 15 January', history: [
      { _id: 10001, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '1,750.00', status: 'Approved' },
      { _id: 10002, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '2,750.00', status: 'Reject' },
      { _id: 10003, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '750.00', status: 'Approved' },
    ]
  },

  {
    _id: 2001, date: 'Today, 15 January', history: [
      { _id: 20001, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '3,450.00', status: 'Reject' },
      { _id: 20002, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '1,750.00', status: 'Approved' },
      { _id: 20003, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '1,750.00', status: 'Reject' },
    ]
  },
]

const pending = [
  {
    _id: 2001, date: 'Today, 15 January', history: [
      { _id: 20001, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '3,450.00', status: 'Pending' },
      { _id: 20002, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '1,750.00', status: 'Pending' },
      { _id: 20003, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '1,750.00', status: 'Pending' },
    ]
  },
]

const actionLink = [
  { id: 100, name: 'Pay', link: '/z', icon: faHryvnia },
  { id: 102, name: 'Request', link: '/y', icon: faHandHoldingUsd },
  { id: 103, name: 'TopUp', link: '/x', icon: faWallet },
  { id: 104, name: 'Withdraw', link: '/', icon: faFunnelDollar }
]

const HomeBody = () => {
  const { balance, balanceDispatch } = useContext(store)
  const [key, setKey] = useState('recent');


  const fetchActivity = useCallback(async () => {
    try {
      const pendingData = pending
      fetchData(balanceDispatch, PENDING_DATA, pendingData)
    }
    catch (error) {
      throw new Error()
    }
  }, [balanceDispatch])


  const fetchPending = useCallback(async () => {
    try {
      const data = activity
      fetchData(balanceDispatch, ACTIVITY_DATA, data)
    }
    catch (error) {
      throw new Error()
    }
  }, [balanceDispatch])


  useEffect(() => {
    if (balance.activityData.length === 0) {
      fetchActivity()
    }

    if (balance.pendingData.length === 0) {
      fetchPending()
    }
  }, [fetchActivity, balance.activityData.length, fetchPending, balance.pendingData.length])


  return (

    <div className={classes.HomeBody}>
      <Container >
        <Row>
          <Col md={4}>
            <p className={classes.ActionTitle}>Action</p>
            <div className='d-flex flex-wrap'>
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
