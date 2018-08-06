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