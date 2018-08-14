#### Rusher
Rusher is a high concurrency (using actor model) websocket server integrated with SQLite for data persistence.
For now, this websocket provides the following api's
1. Chat
2. Colloborative text editing

An example client, consuming these api's, is available in the web folder of this project.
It is a React JS web application (in future will add an react-native app too) 

**NOTE: For benchmarking code and instructions use the [bench branch](https://github.com/Yokeshthirumoorthi/rusher/tree/bench)**

#### Why Rusher
The objectives of this project are 
1. Provide a RUST websocket server with capability to persist data.
2. Provide apis and consume them via web app 
3. Show that RUST websocket server could handle as much simultaneous connenction as Erlang Phoenix based websocket server can do. 
 
Note: Rusher websocket is written using RUST - a fast, safe and efficient  programming language to develope
highly concurrent and parallel programs. So I believe to acheive something like this blog - [erlang-phoenix 2 million websocket connection.]( http://phoenixframework.org/blog/the-road-to-2-million-websocket-connections).

#### Software Stack

This project uses the following stack,
1. Rust programming
    1. Actix-web for actor model based websocket server
    2. Diesel framework SQLite for data persistence
2. React JS with
    1. Quill editor
    2. React-live-chat

#### Build Instructions

1. Prerequisites for build

    Install Rust by run the following in your terminal

    ```bash
    curl https://sh.rustup.rs -sSf | sh
    ```
    or follow [this official installation instruction]( https://www.rust-lang.org/en-US/install.html).

    You’ll need to have Node >= 6, to run the web client, on your local development machine. Latest version of nodejs could be downloaded from https://nodejs.org/en/

    Install build essentials in ubuntu to configure diesel.

    ```bash
    yes | sudo apt-get update
    yes | sudo apt-get install build-essential sqlite3 libsqlite3-dev 
    ```
2. Setup the project

    ```bash
    git clone https://github.com/Yokeshthirumoorthi/rusher.git
    cd rusher
    ```

3. Running server

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

    The server will start listening at http://127.0.0.1:8080

4. Running web client
    
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

#### Future Works
1. Provide more apis such as
    1. Geofence (typically used for real time location tacking in mobile apps)
    2. Activity feeds within friend networks
    3. Realtime bets and
    4. Realtime trading
2. An example client consuming these apis using react-native app    
3. Provide more options for data persistence and benchmark each of them
    1. Using PostGIS for location based services
    2. Comparing SQLite / Rust-Redis / Postgres in use for this websocket server
4. Provide data vizualization for benchmarks and performance metrics comparisions like [this](https://www.techempower.com/benchmarks/#section=test&runid=fd07b64e-47ce-411e-8b9b-b13368e988c6)    

#### Authur

1. Yokesh Thirumoorthi - initial author - yokeshthirumoorthi@gmail.com

## Sending Feedback

We are always open to [your feedback](https://github.com/Yokeshthirumoorthi/rusher/issues).

#### Credits
This application uses Open Source components. You can find the source code of their open source projects along with license information below. I acknowledge and am grateful to these developers for their contributions to open source.

```
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
```

#### License

This program is licensed under the "MIT License". Please see the file LICENSE in the source distribution of this software for license terms.
