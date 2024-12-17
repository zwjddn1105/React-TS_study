const Button = ({ text, color, children }) => {
    const onClickButton = () => {
      console.log(text)
    }
    return (
      <button
        onClick={onClickButton}
        // onMouseEnter={onClickButton}
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children}
      </button>
    )
}

Button.defaultProps = {
  color: "black",
}
export default Button