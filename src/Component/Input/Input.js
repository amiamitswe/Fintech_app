import React from 'react'
import { Form } from 'react-bootstrap'
import RadioInput from './RadioInput/RadioInput'

const Input = (props) => {

  let inputElement

  switch (props.type) {
    case 'number':
      inputElement = <div>
        <Form.Group>
          <Form.Label>{props.label}</Form.Label>
          <Form.Control onChange={props.changed} name={props.name} value={props.value} type="number" placeholder={props.placeholder} />
          <Form.Text className="text-muted d-none">
            We'll never share your email with anyone else.
        </Form.Text>
        </Form.Group>
      </div>
      break

    case "radio":
      inputElement = (
        <>{props.label ? <label className="form-check-label" htmlFor={props.labelfor}>{props.label}</label> : ""}
          <div className='mt-2 d-flex'>
            {props.options.map(el => <div key={el._id}>
              <RadioInput changed={props.changed} name={props.name} value={el.value} label={el.label} />
            </div>)}
          </div>
        </>
      )
      break

    default:
      inputElement = <div>
        <Form.Group>
          <Form.Label>{props.label}</Form.Label>
          <Form.Control onChange={props.changed} name={props.name} value={props.value} type="text" placeholder={props.placeholder} />
          <Form.Text className="text-muted d-none">
            We'll never share your Text with anyone else.
        </Form.Text>
        </Form.Group>
      </div>
  }
  return inputElement
}

export default Input
