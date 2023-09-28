import './index.css'

const SuggestionItem = props => {
  const {details, showText} = props
  const {suggestion} = details

  const onShow = () => {
    showText(suggestion)
  }

  return (
    <li className="li">
      <p>{suggestion}</p>
      <button type="button" className="btn" onClick={onShow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="i2"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
