// Copyright © 2018 Yokesh Thirumoorthi
// [This program is licensed under the "MIT License"]
// Please see the file LICENSE in the source
// distribution of this software for license terms.

const WS_URL = "ws://localhost:8080/ws/";

let connection = null;

export default {
    init: (onmessageCallback) => {
        connection = new WebSocket(WS_URL);
        connection.onmessage = onmessageCallback;
    },
    sendMessage: (message) => {
        if (connection) {
            connection.send(message);
        }
    }
}