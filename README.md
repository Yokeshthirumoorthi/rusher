#### Rusher
This project provides a Rust-based highly-scalable websocket server (based on actor model) that provides following APIs

1. Real time location tacking with geofence triggers
2. Colloborative text editing
3. Chat

The clients consuming these api are implemented using javascript (using React and if possible with React-native).

The project is planned to be stretched by
1. Benchmarking this websocket server for very high concurrent connections
    1. Inspired to acheive something like erlang-phoenix 2 million websocket connection. (Ref: http://phoenixframework.org/blog/the-road-to-2-million-websocket-connections).
2. Provide client side performance comparision between firebase vs Rust websocket connection.
3. Benchmarking performance for read and write latency with various DB such as 
    1. Using PostGIS instead of Geofire
    2. Comparing SQLite / Rust-Redis / Postgres in use for this websocket server
3. Implementing more APIs like
    1. Activity feeds within friend networks
    2. Realtime bets and
    3. Realtime trading

#### Software Stack

This project uses the following stack,
1. Rust programming
2. Actix-web for actor model based websocket server
3. SQLite for data persistence
4. React for chat UI
5. Quill Js for text editor
6. Rust with Firebase/Geofire for geofencing

#### Build Instructions

    To install Rust, run the following in your terminal

    ```bash
    curl https://sh.rustup.rs -sSf | sh
    ```
    or follow the installation instruction from https://www.rust-lang.org/en-US/install.html.

    To install SQLite, follwing the instruction in this page http://www.sqlitetutorial.net/download-install-sqlite/

    You’ll need to have Node >= 6, to run the web client, on your local development machine. Latest version of nodejs could be downloaded from https://nodejs.org/en/

1. Setting up the project

    ```bash
    git clone https://github.com/Yokeshthirumoorthi/rusher.git
    cd rusher
    ```

2. Running server

    From the root folder of the project execute the following commands to run server

    ```bash
    cd ws-server
    # init database sqlite
    cargo install diesel_cli --no-default-features --features sqlite
    echo "DATABASE_URL=file:test.db" > .env
    diesel migration run
    # build the websocket server
    cargo build
    # Instead to run in debug mode use 
    # cargo run --bin server
    cargo run --bin server --release
    ```

3. Running web client
    
    From the root folder of the project execute the following commands to run web client

    This runs the app in development mode.
    Open http://localhost:3000 to view it in the browser.

    The page will automatically reload if you make changes to the js code.
    You will see the build errors and lint warnings in the console.

    ```bash
    cd web
    npm install
    npm start
    ```

    To build the app for production use the following command

    ```bash
    npm run build
    ```
    It Builds the app to the build folder and it correctly bundles React in production mode and optimizes the build for the best performance.
    

#### Nice to have

Provide data vizualization for benchmarks and performance metrics

#### Authur

1. Yokesh Thirumoorthi - initial author - yokeshthirumoorthi@gmail.com

#### Credits
This application uses Open Source components. You can find the source code of their open source projects along with license information below. I acknowledge and am grateful to these developers for their contributions to open source.

Project: https://github.com/actix/examples/tree/master/websocket-chat/
Copyright (c) 2017 Nikolay Kim (fafhrd91@gmail.com)
License (MIT) https://github.com/actix/actix-web/blob/master/LICENSE-MIT

Project: https://github.com/dharness/react-chat-window
Author dylan@kingofthestack.com

Project: https://github.com/zenoamaro/react-quill
Copyright (c) 2016, zenoamaro zenoamaro@gmail.com
License (MIT) https://github.com/zenoamaro/react-quill/blob/master/LICENSE

Project: https://github.com/facebook/create-react-app#creating-an-app
Copyright (c) 2013-present, Facebook, Inc.
License (MIT) https://github.com/facebook/create-react-app/blob/next/LICENSE

Project: https://github.com/diesel-rs/diesel
Copyright (c) 2015-2018 Sean Griffin
License (MIT) https://github.com/diesel-rs/diesel/blob/master/LICENSE-MIT


#### License

This program is licensed under the "MIT License". Please see the file LICENSE in the source distribution of this software for license terms.
