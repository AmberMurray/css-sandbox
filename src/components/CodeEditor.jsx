import React, { Component } from 'react'
import AceEditor from 'react-ace'

import 'brace/mode/css'
import 'brace/theme/chrome'
import 'brace/snippets/css'
import 'brace/ext/language_tools'


class CodeEditor extends Component {
  contructor() {
    this.onChange = this.onChange.bind(this)
  }

  onChange(newValue, e) {
    // const editor = this.ace.Editor; // The editor object is from Ace's API
    // console.log(editor.getValue()); // Outputs the value of the editor
  }

  render() {
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
         width='95% '
      />
    )
  }
}

export default CodeEditor
