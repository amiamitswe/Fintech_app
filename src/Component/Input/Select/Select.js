const Select = (props) => {
    const { label, name, value, changed, options } = props
    return (
        <div className='mb-2'>
            <label>{label ? label : 'Option'}</label>
            <select name={name} value={value} onChange={changed} className="form-control">
                <option hidden>Select your {label ? label : 'Option'}</option>
                {options.map((option) => (
                    <option key={option._id} value={option.title}>{option.title}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
