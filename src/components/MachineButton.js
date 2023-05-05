const MachineButton = ({ onClick, text, ...rest }) => {
  return (
    <button onClick={onClick} {...rest}>
      {text}
    </button>
  )
}

export default MachineButton
