# Setup ElectrumX Server

Here are the steps required to run electrumx for KMD. Replace the variables according to your setup. You need to setup minimum 2 electrum servers for same coin to ensure stable operation.

Refer to the docs at [https://electrumx.readthedocs.io/en/latest/](https://electrumx.readthedocs.io/en/latest/) for more info.

- `<username>` is the username under which electrumx will run

- `$rpcuser` and `$rpcpass` are from the conf of the wallet daemon

## General part

```bash
sudo apt-get install python3-setuptools python3-multidict python3.6 python3.6-dev libleveldb-dev

git clone https://github.com/kyuupichan/electrumx
cd electrumx
sudo python3.6 setup.py install
```

## Coin specific part

Run:

```bash
sudo cp contrib/systemd/electrumx.service /etc/systemd/system/electrumx_KMD.service
sudo nano /etc/systemd/system/electrumx_KMD.service
```

Fill the following contents into the file:

```
Description=Electrumx_KMD
EnvironmentFile=/etc/electrumx_KMD.conf
User=<username>
```

Run:

```bash
sudo mkdir -p /electrumdb/KMD
sudo nano /etc/electrumx_KMD.conf
```

Fill the following contents into the file:

```
COIN = Komodo
DB_DIRECTORY = /electrumdb/KMD
DAEMON_URL = http://$rpcuser:$rpcpass@127.0.0.1:<port>/
SERVICES = tcp://:10001,rpc://:8001
EVENT_LOOP_POLICY = uvloop
PEER_DISCOVERY = self
INITIAL_CONCURRENT = 50
COST_SOFT_LIMIT = 10000
COST_HARD_LIMIT = 100000
BANDWIDTH_UNIT_COST = 10000
```

```bash
sudo systemctl start electrumx_KMD
```
