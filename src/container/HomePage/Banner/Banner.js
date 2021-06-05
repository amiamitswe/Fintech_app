import React, { useCallback, useContext, useEffect, useState } from 'react'
import { store } from '../../../context/store'
import { ADD_NEW_BALANCE, ALL_BALANCE, RESET_ERROR, SET_ERROR } from '../../../context/actionTypes/actionTypes'
import { Col, Container, Row } from 'react-bootstrap'
import BalanceCart from '../BalanceCart/BalanceCart'
import AddBalance from '../AddBalance/AddBalance'
import fetchData from '../../../Utility/fetchData'
import ErrorMessage from '../../../Component/Ui/ErrorMessage/ErrorMessage'
import AddBalanceModal from '../../../Component/Modals/AddBalanceModal'
import classes from './Banner.module.css'
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons'
import { balanceData, selectOption } from '../../../Utility/library'

const Banner = () => {
  const { balance, balanceDispatch } = useContext(store)
  const [show, setShow] = useState(false);
  const [balanceInfo, setBalanceInfo] = useState({})

  // close modal
  const closeModal = () => {
    setShow(false)
    balanceDispatch({ type: RESET_ERROR })
  }

  // show modal
  const showModal = () => setShow(true)

  // fetch add balance data
  const fetchAllBalanceData = useCallback(async () => {
    fetchData(balanceDispatch, ALL_BALANCE, balanceData)
  }, [balanceDispatch])

  // save balance data if empty using useEffect
  useEffect(() => {
    if (balance.data.length === 0) fetchAllBalanceData()
  }, [fetchAllBalanceData, balance.data.length])

  // add balance information
  const addBalanceHandler = (e) => {
    const updateInfo = { ...balanceInfo }
    updateInfo[e.target.name] = e.target.value
    setBalanceInfo(updateInfo)
  }

  // on submit handler
  const onSubmitHandler = () => {
    try {
      const balanceData = { ...balanceInfo }
      if (balanceData?.availableBalance && balanceData?.balanceType) {
        balanceDispatch({ type: ADD_NEW_BALANCE, payload: balanceData })
        balanceDispatch({ type: RESET_ERROR })
        setBalanceInfo({})
        setShow(false)
      }
      else balanceDispatch({ type: SET_ERROR, payload: { required: 'All Fields required' } })
    }
    catch (error) {
      throw new Error()
    }
  }

  // add balance modal
  const addBalanceModal = <AddBalanceModal
    show={show}
    saveIcon={faSave}
    saveText='Save Balance'
    closeIcon={faTimes}
    closeText='Cancel'
    handleClose={closeModal}
    onSubmitHandler={onSubmitHandler}
    addBalanceHandler={addBalanceHandler}
    selectOption={selectOption}
    availableBalance={balanceInfo?.availableBalance || ''}
  />

  return (
    <div className={classes.Banner}>
      {balance.error?.required && <ErrorMessage message={balance.error.required} />}
      {addBalanceModal}
      <Container>
        <Row>
          <Col>
            <h2 className={classes.BannerTitle + ' text-white'}>Wallet</h2>
            <p className={classes.BannerSubTitle + ' text-white'}>Dashboard</p>
            <div className='d-flex flex-md-row flex-column'>
              {balance.data?.map(item => (
                <BalanceCart key={item._id} type={item.balanceType} amount={item.availableBalance} isPrimary={item.isPrimary} />
              ))}
              <AddBalance onClick={showModal} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
