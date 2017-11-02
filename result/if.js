
const React = require('react')
const Component = React.Component
module.exports = class MyComponent extends Component {
	constructor(props) {
    super(props)
    this.state = { 
      flag: true,
      text: ["Hello wolrd", "Hello Daniel"] 
    }
  }

  getChild () {
    return this.state.flag
        ?  this.state.text.map((item) => {
          return React.createElement('p', null, item)
        })
        : null;
  }

  render() {
    // TODO
   return React.createElement('div', null, this.getChild())
  }        
}