// Copyright © 2018 Yokesh Thirumoorthi
// [This program is licensed under the "MIT License"]
// Please see the file LICENSE in the source
// distribution of this software for license terms.

// CREDITS
// Project: https://github.com/zenoamaro/react-quill
// Copyright (c) 2016, zenoamaro zenoamaro@gmail.com
// License (MIT) https://github.com/zenoamaro/react-quill/blob/master/LICENSE

/* 
 * React based Quill editor component
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
        this.attachQuillRefs();
    }

    componentDidUpdate() {
        this.attachQuillRefs()
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        this.quillRef = this.reactQuillRef.getEditor();
    }

    /**
     * Callback function that triggers on editor content change
     * 
     * @param {*} value 
     * @param {*} delta 
     * @param {*} source 
     * @param {*} editor 
     */
    handleChange(value, delta, source, editor) {
        this.props.sendMessage(JSON.stringify(editor.getContents()));
    }

    render() {
        return (
            <div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    onChange={this.handleChange.bind(this)}
                    value={this.props.data}
                    placeholder={'Write some text...'}
                    theme={'snow'} />
            </div>
        )
    }
}

export default QuillEditor;