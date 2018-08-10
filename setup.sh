sysctl -w fs.file-max=12000500
sysctl -w fs.nr_open=20000500
ulimit -n 4000000
sysctl -w net.ipv4.tcp_mem='10000000 10000000 10000000'
sysctl -w net.ipv4.tcp_rmem='1024 4096 16384'
sysctl -w net.ipv4.tcp_wmem='1024 4096 16384'
sysctl -w net.core.rmem_max=16384
sysctl -w net.core.wmem_max=16384
wget http://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb
sudo dpkg -i erlang-solutions_1.0_all.deb
yes | sudo apt-get update
yes | sudo apt-get install elixir esl-erlang build-essential git gnuplot libtemplate-perl autoconf
git clone https://github.com/processone/tsung.git
cd tsung/
./configure
make
sudo make install
cd ..
git clone -b bench https://github.com/Yokeshthirumoorthi/rusher.git
echo "root soft nofile 4000000" >> /etc/security/limits.conf
echo "root hard nofile 4000000" >> /etc/security/limits.conf
