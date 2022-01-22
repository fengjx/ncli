#!/usr/bin/env node

const { Command } = require('commander')
const inquirer = require('inquirer')

const program = new Command()
program.version('0.0.1')

console.log('hello node cli')

// https://github.com/tj/commander.js
// 解析命令行参数
// hello -d -n fengjx
program.option('-d, --debug', 'debug')
program.option('-n, --name <type>', 'your name')
program.parse(process.argv)
const opts = program.opts()

if (opts.debug) {
  console.log('opts: ', opts)
}

console.log(`hello: ${opts.name}`)

// https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples
// 交互式终端
const questions = [
  {
    type: 'input',
    name: 'username',
    message: "输入账号",
  },
  {
    type: 'password',
    name: 'password',
    message: "输入密码"
  }
]

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '))
})
