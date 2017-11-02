const React = require('react')
const Component = React.Component
module.exports = class MyComponent extends Component {
	constructor(props) {
    super(props)
    this.state = { 
      list: [{ 
          name: 'hello' 
        },{ 
          name: 'world' 
        }]
    }
  }

  getChildren () {
    return this.state.list.map((item, index) => {
      return [
        React.createElement('span', null, index),
         React.createElement('span', null, item.name)
        ]
    })
  
  }

  render() {
    return React.createElement('div', null, ...this.getChildren())
  }        
}