import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {clickedList: []}

  onClickPlus = id => {
    this.setState(prevState => ({clickedList: [...prevState.clickedList, id]}))
  }

  onClickMinus = id => {
    const {clickedList} = this.state
    const newList = clickedList.filter(each => each !== id)
    this.setState({clickedList: newList})
  }

  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    const {clickedList} = this.state

    return (
      <div className="app-bg">
        <div className="card-bg">
          <h1 className="heading-styles">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem
                faqs={each}
                onClickPlus={this.onClickPlus}
                onClickMinus={this.onClickMinus}
                isClicked={clickedList.includes(each.id)}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
