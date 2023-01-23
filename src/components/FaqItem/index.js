// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqs, isClicked, onClickPlus, onClickMinus} = props
  const {id, questionText, answerText} = faqs

  const onShow = () => {
    onClickPlus(id)
  }
  const onHide = () => {
    onClickMinus(id)
  }
  const image = isClicked ? (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
      alt="minus"
    />
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      alt="plus"
    />
  )
  return (
    <li>
      {isClicked ? (
        <div>
          <h1>{questionText}</h1>
          <button type="button" onClick={onHide}>
            {image}
          </button>
          <p>{answerText}</p>
        </div>
      ) : (
        <div>
          <h1>{questionText}</h1>
          <button type="button" onClick={onShow}>
            {image}
          </button>
        </div>
      )}
    </li>
  )
}

export default FaqItem
