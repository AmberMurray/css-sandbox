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

  onChange (newValue, e) {
    console.log(newValue)

  }

  handleClick(newValue, e) {
    console.log('handle click here');
    console.log(newValue);
    document.styleSheets[10].deleteRule[0]
    document.styleSheets[10].addRule(newValue)


    console.log(document.styleSheets[10].cssRules[0].cssText);
  }

  render() {
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
           value={this.props.animationCssText}
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
