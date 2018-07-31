// Copyright © 2018 Yokesh Thirumoorthi
// [This program is licensed under the "MIT License"]
// Please see the file LICENSE in the source
// distribution of this software for license terms.

// CREDITS
// Project: https://github.com/dharness/react-chat-window
// Auther dylan@kingofthestack.com

/**
 * A react based chat component window 
 */

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Launcher } from 'react-chat-window'

let messageHistory = [
    { type: 'text', author: "me", data: { text: "Why don't they have salsa on the table?" } },
    { type: 'text', author: "them", data: { text: "What do you need salsa for?" } },
    { type: 'text', author: "me", data: { text: "Salsa is now the number one condiment in America." } },
    { type: 'text', author: "them", data: { text: "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'" } },
    { type: 'text', author: "me", data: { text: "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'" } },
    { type: 'text', author: "them", data: { text: "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!" } },
    { type: 'text', author: "me", data: { text: "See, this should be a show. This is the show. " } },
    { type: 'text', author: "them", data: { text: "What?" } },
    { type: 'text', author: "me", data: { text: "This. Just talking." } },
    { type: 'text', author: "them", data: { text: "Yeah, right." } },
    { type: 'text', author: "me", data: { text: "I'm really serious. I think that's a good idea. " } },
    { type: 'text', author: "them", data: { text: "Just talking? Well what's the show about?" } },
    { type: 'text', author: "me", data: { text: "It's about nothing." } },
    { type: 'text', author: "them", data: { text: "No story?" } },
    { type: 'text', author: "me", data: { text: "No forget the story. " } },
    { type: 'text', author: "them", data: { text: "You've got to have a story." } },
    { type: 'emoji', author: "me", data: { emoji: "😋" } },
];

const WS_URL = "ws://localhost:8080/ws/";

class ChatWindow extends Component {

    constructor() {
        super();
        // Initialize state with message history
        // TODO: defer loading this component and get chat data from server
        this.state = {
            messageList: messageHistory
        };
    }

    componentDidMount() {
        // new websocket connection
        // this.connection = new WebSocket(WS_URL);
        // listen to onmessage event
        // this.connection.onmessage = evt => {
        //     console.log("On Message", evt);
        //     this._sendMessage(evt.data.toString())
        // };
    }

    /**
     * Handles the user typed data
     * 
     * @param {JSON} message json generated by the chat launcher window 
     */
    _onMessageWasSent(message) {
        this.connection.send(JSON.stringify(message));
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }

    /**
     * Handles peer entered data for this users' view
     * 
     * @param {String} text entered by peer
     */
    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }
    _sendMessage_json(content) {
        // TODO: handle this string check in generic way
        if (content !== "Someone joined" && content !== "Someone disconnected") {
            let json_content = JSON.parse(content);
            console.log("json_content", json_content);
            // this.setState({
            //     editorContent: JSON.parse(content)
            // })
        };
    }

    render() {
        return (<div>
            <Launcher
                agentProfile={{
                    teamName: 'react-live-chat',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />
        </div>)
    }
}

export default ChatWindow;