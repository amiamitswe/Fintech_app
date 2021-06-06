import { faFunnelDollar, faHandHoldingUsd, faHryvnia, faWallet } from '@fortawesome/free-solid-svg-icons'

const dummyActivity = [
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

const dummyPending = [
  {
    _id: 2001, date: 'Today, 15 January', history: [
      { _id: 20001, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '3,450.00', status: 'Pending' },
      { _id: 20002, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '1,750.00', status: 'Pending' },
      { _id: 20003, balanceType: 'Dollar Balance (Primary)', email: 'Mrs Mohan . valobasha@email.com', amount: '1,750.00', status: 'Pending' },
    ]
  },
]

const defaultActionLink = [
  { id: 100, name: 'Pay', link: '/pay', icon: faHryvnia },
  { id: 102, name: 'Request', link: '/request', icon: faHandHoldingUsd },
  { id: 103, name: 'TopUp', link: '/topUp', icon: faWallet },
  { id: 104, name: 'Withdraw', link: '/', icon: faFunnelDollar }
]

const defaultBalanceData = [
  { _id: 10001, balanceType: 'Dollar Balance', availableBalance: 100, isPrimary: true },
  { _id: 10002, balanceType: 'My Dollar', availableBalance: 150, },
]

const balanceTypeOptions = [
  { _id: 10000001, title: 'Dollar Balance' },
  { _id: 10000002, title: 'My Dollar' }
]

export { dummyActivity, dummyPending, defaultActionLink, defaultBalanceData, balanceTypeOptions }