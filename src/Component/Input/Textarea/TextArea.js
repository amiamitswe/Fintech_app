function TextArea(props) {
  const { label, value, changed } = props;
  return (
    <div style={{ width: "100%", boxSizing: "border-box" }}>
      {label ? <label htmlFor={label}> {label} </label> : ""}
      <textarea
        className="form-control"
        value={value}
        onChange={changed}
      />
    </div>
  )
}

export default TextArea
