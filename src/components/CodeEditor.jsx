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
      keyframeRule: "",
      keyframeName: '',
      editorText: ''
    }

    this.onChange = this.onChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateStyleSheets = this.updateStyleSheets.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    let className
    if(nextProps.animationClass) {
      className = nextProps.animationClass
    } else if (nextProps.buttonClass) {
      className = nextProps.buttonClass
    } else {
      className = nextProps.formClass
    }
    this.setState({ editorText: nextProps.text, className: '.' + className, keyframeName: nextProps.animationName })
  }

  onChange (newValue) {
    if(this.state.keyframeName){
      let newName = newValue.split(' ')[0].replace('.', '')
      let ruleSplit = newValue.split('@')
      this.setState({ cssRule: ruleSplit[0], keyframeRule: '@' + ruleSplit[1], editorText: newValue, keyframeName: newName })
    } else {
      this.setState({ cssRule: newValue, editorText: newValue })
    }
  }

  updateStyleSheets (newValue, searchParam) {
    let styleSheets = document.styleSheets
    let searchProp = this.props.animationName ? 'name' : 'selectorText'

    for(let i = 0; i < styleSheets.length; i++) {
	    if(styleSheets[i].cssRules) {
        for (let j = 0; j < styleSheets[i].cssRules.length; j++ ) {
          if(styleSheets[i].cssRules[j][searchProp] === searchParam && searchProp === 'name' ) {
                styleSheets[i].deleteRule(j)
                styleSheets[i].deleteRule(j)
                styleSheets[i].insertRule(this.state.cssRule, 0)
                styleSheets[i].insertRule(this.state.keyframeRule, 1)
            } else if (styleSheets[i].cssRules[j][searchProp] === searchParam) {
              styleSheets[i].deleteRule(j)
              styleSheets[i].insertRule(newValue, 0)
            }
          }
        }
      }
    }

  handleClick(e) {
    try {
      if(this.state.keyframeRule) {
        this.updateStyleSheets(this.state.cssRule + this.state.keyframeRule, this.state.keyframeName)
      } else {
        this.updateStyleSheets(this.state.cssRule, this.state.className)
      }
    }
    catch (error) {
      alert('You have made an error. \nTry refreshing the page and play on.')
    }
  }

  render() {

    return (
      <div>
        <AceEditor
           mode={"css"}
           theme={"chrome"}
           name={"ace_content"}
           onChange={this.onChange}
           editorProps={{$blockScrolling: Infinity}}
           enableBasicAutocompletion={true}
           enableLiveAutocompletion={true}
           enableSnippets={true}
           showGutter={true}
           tabSize={4}
           value={this.state.editorText}
           width={'95%'}
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
