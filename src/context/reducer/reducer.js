import { ALL_BALANCE, ADD_NEW_BALANCE, PENDING_DATA, ACTIVITY_DATA, SET_ERROR, RESET_ERROR } from "../actionTypes/actionTypes"

const balanceReducer = (state, { payload, type }) => {
  switch (type) {
    case ALL_BALANCE:
      return {
        ...state,
        data: [...payload]
      }

    case ADD_NEW_BALANCE:
      const updateBalanceData = [...state.data]

      const index = updateBalanceData.findIndex(e => e.balanceType === payload.balanceType)
      updateBalanceData[index].availableBalance = updateBalanceData[index].availableBalance + Number(payload.availableBalance)

      return {
        ...state,
        data: updateBalanceData
      }

    case PENDING_DATA:
      return {
        ...state,
        pendingData: [...payload]
      }

    case ACTIVITY_DATA:
      return {
        ...state,
        activityData: [...payload]
      }

    case SET_ERROR:
      return {
        ...state,
        error: { ...payload, ...state.error }
      }

    case RESET_ERROR:
      return {
        ...state,
        error: null
      }

    default:
      throw new Error()
  }
}

export default balanceReducer