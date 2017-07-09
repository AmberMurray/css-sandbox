import React, { Component } from 'react';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';


class CodeEditor extends Component {
  contructor() {
    this.onChange = this.onChange.bind(this);
  }

  onChange(newValue, e) {
    // const editor = this.ace.editor; // The editor object is from Ace's API
    // console.log(editor.getValue()); // Outputs the value of the editor
  }

  render() {
    return (
      <AceEditor
         mode="javascript"
         theme="github"
         onChange={this.onChange}
         name="UNIQUE_ID_OF_DIV"
         editorProps={{$blockScrolling: true}}
      />
    )
  }
}

export default CodeEditor
