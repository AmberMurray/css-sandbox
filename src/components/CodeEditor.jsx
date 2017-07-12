import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/css'
import 'brace/theme/chrome'
import 'brace/snippets/css'
import 'brace/ext/language_tools'


class CodeEditor extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newValue: ''
    }

    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log('Next props', nextProps);
    this.setState({ newValue: nextProps.animationCssText })
  }

  onChange (newValue) {
    this.setState({ newValue })
  }

  handleClick(e) {
    try {
      console.log('handle click here');
      console.log(this.state.newValue);
      document.styleSheets[10].deleteRule[0]
      document.styleSheets[10].insertRule(this.state.newValue, 1)

      console.log(document.styleSheets[10].cssRules[0].cssText);
    }
    catch (error) {
      console.log('You suck because ' + error);
    }
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <div>
        <AceEditor
           mode="css"
           theme="chrome"
           name="ace_content"
           onChange={this.onChange}
           editorProps={{$blockScrolling: Infinity}}
           enableBasicAutocompletion={true}
           enableLiveAutocompletion={true}
           enableSnippets={true}
           showGutter={true}
           value={this.state.newValue}
           width='94% '
        />
        <div className='submit-div-container'>
          <button className='resource-display-button submit-button' onClick={this.handleClick}><span className='button-text'>Submit</span></button>
        </div>
      </div>
    )
  }
}

export default CodeEditor
