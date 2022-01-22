# node 命令行终端

## 安装

```bash
git clone https://github.com/fengjx/ncli.git
npm install
npm install -g .
```

## hello

```bash
$ hello -h
hello node cli
Usage: hello [options]

Options:
  -V, --version      output the version number
  -d, --debug        debug
  -n, --name <type>  your name
  -h, --help         display help for command
```

```bash
$ hello -d -n name
hello node cli
opts:  { debug: true, name: 'name' }
hello: name
? 输入账号 fengjx
? 输入密码 [hidden]
{
  "username": "fengjx",
  "password": "123456"
}
```