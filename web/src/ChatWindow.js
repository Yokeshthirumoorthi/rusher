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

class ChatWindow extends Component {
    render() {
        return (<div>
            <Launcher
                agentProfile={{
                    teamName: 'react-live-chat',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={this.props.sendMessage}
                messageList={this.props.data}
                showEmoji={false}
            />
        </div>)
    }
}

export default ChatWindow;