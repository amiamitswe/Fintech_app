import Input from '../Input/Input'
import Select from '../Input/Select/Select'
import MyModal from './MyModal'

const AddBalanceModal = (props) => {
  const { show, handleClose, onSubmitHandler, addBalanceHandler, selectOption, availableBalance, closeIcon, closeText, saveIcon, saveText } = props
  return (
    <MyModal
      show={show}
      handleClose={handleClose}
      onSubmit={onSubmitHandler}
      cancel={closeIcon}
      closeText={closeText}
      done={saveIcon}
      saveText={saveText}
    >
      <>
        <Select
          options={selectOption}
          name='balanceType'
          label='Balance Type'
          changed={addBalanceHandler}
        />
        <Input
          type='number' label='Your Balance'
          placeholder='Your Total balance' name='availableBalance'
          changed={addBalanceHandler}
          value={availableBalance}
        />
      </>
    </MyModal>
  )
}

export default AddBalanceModal
