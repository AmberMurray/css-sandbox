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
      newValue: '',
      oldValue: '',
    }

    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
      this.updateStyleSheets = this.updateStyleSheets.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ newValue: nextProps.text, oldValue: '.' + nextProps.animationClass })
  }

  onChange (newValue) {
    this.setState({ newValue })
  }

  updateStyleSheets (newValue, oldValue) {
    let styleSheets = document.styleSheets

    for(let i = 0; i < styleSheets.length; i++) {
	    if(styleSheets[i].cssRules) {
        for (let j = 0; j < styleSheets[i].cssRules.length; j++ ) {
          if(styleSheets[i].cssRules[j].selectorText === this.state.oldValue) {
            styleSheets[i].deleteRule(j)
            styleSheets[i].insertRule(this.state.newValue, 0)
          }
        }
      }
    }
  }

  handleClick(e) {
    try {
      this.updateStyleSheets(this.state.newValue, this.state.oldValue)
    }
    catch (error) {
      console.log('You suck because ' + error);
    }
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
           value={this.state.newValue}
           width='94%'
           wrapEnabled={true}
        />
        <div className='submit-div-container'>
          <button className='resource-display-button submit-button' onClick={this.handleClick}><span className='button-text'>Submit</span></button>
        </div>
      </div>
    )
  }
}

export default CodeEditor
