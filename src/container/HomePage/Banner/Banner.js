import React, { useCallback, useContext, useEffect, useState } from 'react'
import { store } from '../../../context/store'
import { ADD_NEW_BALANCE, ALL_BALANCE, RESET_ERROR, SET_ERROR } from '../../../context/actionTypes/actionTypes'
import { Col, Container, Row } from 'react-bootstrap'
import BalanceCart from '../BalanceCart/BalanceCart'
import AddBalance from '../AddBalance/AddBalance'
import classes from './Banner.module.css'
import MyModal from '../../../Component/MyModal/MyModal'
import Input from '../../../Component/Input/Input'
// import CheckBox from '../../../Component/Input/CheckBox/CheckBox'
import fetchData from '../../../Utility/fetchData'
import Select from '../../../Component/Input/Select/Select'
import ErrorMessage from '../../../Component/Ui/ErrorMessage/ErrorMessage'

// const checkBoxOptions = [
//   { value: 'primary', displayValue: 'Primary' }
// ]

const balanceData = [
  { _id: 10001, balanceType: 'Dollar Balance', availableBalance: 12, isPrimary: true },
  { _id: 10002, balanceType: 'My Dollar', availableBalance: 15, },
]

const selectOption = [
  { _id: 10000001, title: 'Dollar Balance' },
  { _id: 10000002, title: 'My Dollar' }
]

const Banner = () => {

  const { balance, balanceDispatch } = useContext(store)

  // console.log(balance);

  const [show, setShow] = useState(false);
  const [balanceInfo, setBalanceInfo] = useState({})
  // const [isPrimary, setIsPrimary] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchAllBalanceData = useCallback(async () => {
    fetchData(balanceDispatch, ALL_BALANCE, balanceData)
  }, [balanceDispatch])

  useEffect(() => {
    if (balance.data.length === 0) {
      fetchAllBalanceData()
    }
  }, [fetchAllBalanceData, balance.data.length])


  const addBalanceHandler = (e) => {
    const updateInfo = { ...balanceInfo }
    updateInfo[e.target.name] = e.target.value
    setBalanceInfo(updateInfo)
  }

  const onSubmitHandler = () => {
    try {
      const balanceData = { ...balanceInfo }

      if (balanceData?.availableBalance && balanceData?.balanceType) {
        balanceDispatch({ type: ADD_NEW_BALANCE, payload: balanceData })
        balanceDispatch({ type: RESET_ERROR })
        setBalanceInfo({})
        setShow(false)
      }
      else {
        balanceDispatch({ type: SET_ERROR, payload: { required: 'All Fields required' } })
      }
    }


    catch (error) {
      throw new Error()
    }
  }


  const myModal = <MyModal show={show} handleClose={handleClose} onSubmit={onSubmitHandler}>
    <>
      <Select options={selectOption} name='balanceType' label='Balance Type' changed={addBalanceHandler} />

      <Input
        type='number' label='Your Balance'
        placeholder='Your Total balance' name='availableBalance'
        changed={addBalanceHandler} value={balanceInfo?.availableBalance || ''}
      />
    </>
  </MyModal>

  return (
    <div className={classes.Banner}>
      {balance.error?.required && <ErrorMessage message={balance.error.required} />}
      {myModal}
      <Container>
        <Row>
          <Col>
            <h2 className={classes.BannerTitle + ' text-white'}>Wallet</h2>
            <p className={classes.BannerSubTitle + ' text-white'}>Dashboard</p>

            <div className='d-flex'>
              {balance.data?.map(item => (
                <BalanceCart key={item._id} type={item.balanceType} amount={item.availableBalance} isPrimary={item.isPrimary} />
              ))}
              <AddBalance onClick={handleShow} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
