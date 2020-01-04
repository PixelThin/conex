const process = require('process')
const { existsSync } = require('fs')
const { exec } = require('child_process')
const argv = require('yargs')
    .usage('Usage: [--config filename] "echo ${config.version}"')
    .argv

// Pull in a custom config file or package.json if it exists.
const config = argv.config ? require(argv.config) : {}
const package = existsSync('./package.json') ? require('./package.json') : {}

// Input is a regular string that may contain JS template string syntax
// Create a template string from the input string and eval it to
// get a string to execute via the command-line interpreter
let templateString = "`" + argv._[0] + "`"
const toExecute = eval(templateString)
console.log(`conex: executing ${toExecute}`)
const child = exec(toExecute)
child.stdout.on('data', data => console.log(data))
child.stderr.on('data', data => console.error(data))
child.on('exit', () => console.log('conex: execution complete.'))
