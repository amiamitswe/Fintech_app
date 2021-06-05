const fetchData = async (dispatch, type, data) => {
  dispatch({ type: type, payload: data })
}

export default fetchData
