import { Form } from 'react-bootstrap'
import RadioInput from './RadioInput/RadioInput'

const Input = (props) => {
  const { type, label, labelFor, changed, name, value, placeholder, options } = props

  let inputElement

  switch (type) {
    case 'number':
      inputElement = <>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            onChange={changed}
            name={name}
            value={value}
            type="number"
            placeholder={placeholder}
          />
        </Form.Group>
      </>
      break

    case "radio":
      inputElement = (
        <>{label ? <label className="form-check-label" htmlFor={labelFor}>{label}</label> : ""}
          <div className='mt-2 d-flex'>
            {options.map(el => <div key={el._id}>
              <RadioInput
                changed={changed}
                name={name}
                value={el.value}
                label={el.label}
              />
            </div>)}
          </div>
        </>
      )
      break

    default:
      inputElement = <>
        <Form.Group>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            onChange={changed}
            name={name}
            value={value}
            type="text"
            placeholder={placeholder}
          />
        </Form.Group>
      </>
  }
  return inputElement
}

export default Input
