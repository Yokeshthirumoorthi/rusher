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

const WS_URL = "ws://localhost:8080/ws/";

class QuillEditor extends Component {
    constructor(props) {
        super(props)
        this.quillRef = null;      // Quill instance
        this.reactQuillRef = null; // ReactQuill component
        this.state = {
            editorContent: []
        };
    }

    componentDidMount() {
        this.attachQuillRefs();
        // new websocket connection
        this.connection = new WebSocket(WS_URL);
        // listen to onmessage event
        this.connection.onmessage = evt => {
            console.log("On Message Quill", evt);
            this.setContents(evt.data)
        };
    }

    componentDidUpdate() {
        this.attachQuillRefs()
    }

    attachQuillRefs = () => {
        if (typeof this.reactQuillRef.getEditor !== 'function') return;
        this.quillRef = this.reactQuillRef.getEditor();
    }

    /**
     * Handles data from websocket
     * 
     * @param {Delta} content from peer editor with delta  
     */
    setContents(content) {
        // TODO: handle this string check in generic way
        if (content !== "Someone joined" && content !== "Someone disconnected") {
            this.setState({
                editorContent: JSON.parse(content)
            })
        };
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
        if (this.connection) {
            this.connection.send(JSON.stringify(editor.getContents()));
        }
    }

    render() {
        return (
            <div>
                <ReactQuill
                    ref={(el) => { this.reactQuillRef = el }}
                    onChange={this.handleChange.bind(this)}
                    value={this.state.editorContent}
                    placeholder={'Write some text...'}
                    theme={'snow'} />
            </div>
        )
    }
}

export default QuillEditor;