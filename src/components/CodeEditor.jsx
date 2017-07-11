import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/css'
import 'brace/theme/chrome'
import 'brace/snippets/css'
import 'brace/ext/language_tools'


class CodeEditor extends Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange(newValue, e) {
    // const editor = this.ace.editor; // The editor object is from Ace's API
    console.log(newValue); // Outputs the value of the editor
  }

  render() {
    console.log(this.props);
    return (
      <AceEditor
         mode="css"
         theme="chrome"
         onChange={this.onChange}
         name="ace_content"
         editorProps={{$blockScrolling: Infinity}}
         enableBasicAutocompletion={true}
         enableLiveAutocompletion={true}
         enableSnippets={true}
         showGutter={true}
         value={this.props.className}
         width='95% '
      />
    )
  }
}

export default CodeEditor
