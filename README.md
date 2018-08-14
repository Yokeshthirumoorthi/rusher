#### Rusher
Rusher is a high concurrency (using actor model) websocket server integrated with SQLite for data persistence.
For now, this websocket provides the following api's
1. Chat
2. Colloborative text editing

An example client, consuming these api's, is available in the web folder of this project.
It is a React JS web application (in future will add an react-native app too) 

**NOTE: For actual implementation use the [master branch](https://github.com/Yokeshthirumoorthi/rusher)**

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

#### Setting up machine

**NOTE : All these instruction are for Ubuntu 16.04**

1. OS configuration for performing benchmarks 

    For both server and client machine, use these scripts to increase the kernel polling and default port range numbers

    Note: To run several commands as root user use 

    ```bash
    sudo su -
    ```

    ```bash
    sysctl -w fs.file-max=12000500
    sysctl -w fs.nr_open=20000500
    ulimit -n 4000000
    sysctl -w net.ipv4.tcp_mem='10000000 10000000 10000000'
    sysctl -w net.ipv4.tcp_rmem='1024 4096 16384'
    sysctl -w net.ipv4.tcp_wmem='1024 4096 16384'
    sysctl -w net.core.rmem_max=16384
    sysctl -w net.core.wmem_max=16384
    echo "root soft nofile 4000000" >> /etc/security/limits.conf
    echo "root hard nofile 4000000" >> /etc/security/limits.conf
    sysctl -w net.ipv4.ip_local_port_range="1024 64000"
    ```

#### Build Instructions

#### Setting up the server machine

1. Prerequisites for build

    Install Rust by run the following in your terminal

    ```bash
    curl https://sh.rustup.rs -sSf | sh
    ```
    or follow [this official installation instruction]( https://www.rust-lang.org/en-US/install.html).

    Install build essentials in ubuntu to configure diesel.

    ```bash
    yes | sudo apt-get update
    yes | sudo apt-get install build-essential sqlite3 libsqlite3-dev 
    ```

2. Setup the project

    ```bash
    git clone -b bench https://github.com/Yokeshthirumoorthi/rusher.git
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

    The server will start listening at http://0.0.0.0:8080

    **NOTE: Dont forget to check your firewall settings**

#### Setting up the client machine
1. Prerequisites for build

Install Erlang

```bash
wget http://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb
sudo dpkg -i erlang-solutions_1.0_all.deb
```
To install build essentials in ubuntu.

```bash
yes | sudo apt-get update
yes | sudo apt-get install elixir esl-erlang build-essential git gnuplot libtemplate-perl autoconf htop
```
Install Tsung

```bash
git clone https://github.com/processone/tsung.git
cd tsung/
./configure
make
sudo make install
cd ..
```

2. Running server
Running Tsung
```bash
git clone -b bench https://github.com/Yokeshthirumoorthi/rusher.git
cd rusher
tsung -k -f tsungconfig.xml start
```

**NOTE: provide ip address of host machine in tsungconfig.xml file**

#### Useful links:

1. [Set Permanently ulimit -n](https://medium.com/@muhammadtriwibowo/set-permanently-ulimit-n-open-files-in-ubuntu-4d61064429a)
2. [Benchmarking and Scaling WebSockets: Handling 60000 concurrent connections](http://kemalcr.com/blog/2016/11/13/benchmarking-and-scaling-websockets-handling-60000-concurrent-connections/)
3. [Tsung User Guide](http://tsung.erlang-projects.org/user_manual/index.html)
4. [A lot of websockets in Haskell](https://blog.wearewizards.io/a-lot-of-websockets-in-haskell)
5. [Easy distributed load test with Tsung](https://www.slideshare.net/ngocdaothanh/tsung-13985127)

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
