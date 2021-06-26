import Search from 'react-search'
import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react'
 
class Test extends Component {
 
  HiItems(items) {
    console.log(items)
  }
 
  render () {
    let items = [
      { id: 0, value: 'Amazon', URL: '/stocks/AAPL' },
      { id: 1, value: 'Apple' },
      { id: 2, value: 'Boeing' },
      { id: 3, value: 'Ebay' },
      { id: 4, value: 'Ford' },
      { id: 0, value: 'Microsoft' },
      { id: 1, value: 'Netflix' },
      { id: 2, value: 'Qualcomm' },
      { id: 3, value: 'Tesla' },
      { id: 3, value: 'Twitter' }
    ]
 
    return (
      <div>
        <Search items={items} />
 
        <Search items={items}
                placeholder='Select a Company'
                maxSelected={3}
                multiple={true}
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}
 
ReactDOM.render( <Test />, document.getElementById('root'))

export default Test;