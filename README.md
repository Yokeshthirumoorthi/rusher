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


#### Nice to have

Provide data vizualization for benchmarks and performance metrics

#### Authur

1. Yokesh Thirumoorthi - initial author - yokeshthirumoorthi@gmail.com

#### Credits
This application uses Open Source components. You can find the source code of their open source projects along with license information below. I acknowledge and am grateful to these developers for their contributions to open source.

Project: Actix Chat example https://github.com/actix/actix/tree/master/examples/chat
Copyright (c) 2017 Nikilay Kim (fafhrd91@gmail.com)
License (MIT) https://github.com/actix/actix

#### License

This program is licensed under the "MIT License". Please see the file LICENSE in the source distribution of this software for license terms.
