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
      cssRule: '',
      className: '',
      keyframeRule: '',
      keyframeName: '',
    }

    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateStyleSheets = this.updateStyleSheets.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.text);
    let className
    if(nextProps.animationClass) {
      className = nextProps.animationClass
    } else if (nextProps.buttonClass) {
      className = nextProps.buttonClass
    } else {
      className = nextProps.formClass
    }
    this.setState({ cssRule: nextProps.text, className: '.' + className, keyframeName: nextProps.animaitonName })
  }

  onChange (newValue) {
    let ruleSplit = newValue.split('@')

    this.setState({ cssRule: ruleSplit[0], keyframeRule: '@' + ruleSplit[1] })
  }

  updateStyleSheets (newValue, searchParam) {
    let styleSheets = document.styleSheets
    let searchProp = this.props.animationName ? 'name' : 'selectorText'

    console.log('this is newValue:',newValue)
    console.log('this is oldValue:', searchParam)
    console.log('this is animaitonName:', this.props.animationName);

    for(let i = 0; i < styleSheets.length; i++) {
	    if(styleSheets[i].cssRules) {
        for (let j = 0; j < styleSheets[i].cssRules.length; j++ ) {
          if(styleSheets[i].cssRules[j][searchProp] === searchParam) {
            styleSheets[i].deleteRule(j)
            styleSheets[i].insertRule(newValue, 0)
          }
        }
      }
    }
  }

  handleClick(e) {
    try {

      this.updateStyleSheets(this.state.cssRule, this.state.className)
      this.updateStyleSheets(this.state.keyframeRule, this.state.keyframeName)

    }
    catch (error) {
      console.log('You suck because ' + error);
    }
  }

  render() {
    console.log(this.state.cssRule);

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
