const Select = (props) => {
    return (
        <div className='mb-2'>
            <label>{props.label ? props.label : 'Option'}</label>
            <select name={props.name} value={props.value} onChange={props.changed} className="form-control">
                <option hidden>Select your {props.label ? props.label : 'Option'}</option>
                {props.options.map((option) => (
                    <option key={option._id} value={option.title}>{option.title}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
