/* 
 * Simple editor component that takes placeholder text as a prop 
 */
import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactQuill from 'react-quill'

class QuillEditor extends Component {
    constructor(props) {
        super(props)
        this.quillRef = null;      // Quill instance
        this.reactQuillRef = null; // ReactQuill component
    }

    componentDidMount() {
        this.attachQuillRefs()
    }

    componentDidUpdate() {
        this.attachQuillRefs()
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        this.quillRef = this.reactQuillRef.getEditor();
    }

    insertText = () => {
        var range = this.quillRef.getSelection();
        let position = range ? range.index : 0;
        this.quillRef.insertText(position, 'Hello, World! ')
    }

    setContents = () => {
        this.quillRef.setContents([
            { insert: 'Hello ' },
            { insert: 'World!', attributes: { bold: true } },
            { insert: '\n' }
        ])
    }

    handleChange(value, delta) {
        console.log(value, delta);
    }

    render() {
        return (
            <div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    onChange={this.handleChange}
                    theme={'snow'} />
                <button onClick={this.insertText}>Insert Text</button>
                <button onClick={this.setContents}>Update Delta</button>
            </div>
        )
    }
}

export default QuillEditor;