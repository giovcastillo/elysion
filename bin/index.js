#! /usr/bin/env node
try {
    new Function('var {a} = {a: 1}')();
  } catch (error) {
    console.error('Your JavaScript runtime does not support some features used by the `els` command. Please use Node 6 or later.');
    process.exit(1);
}

const path = require('path'), fs = require('fs');

const 
    yargs = require('yargs'), { spawn } = require('child_process');

const cli = yargs(process.argv.slice(2))
    .scriptName("els")
    .usage("Usage: els <file> | -map <path> | -compile <path> | -dir <folder> <destination>")
    .command('-c <file>', 'Compile a Elysion file into a JavaScript file storing it in the same folder.')
    .command('-d <folder> <destination>', 'Compile multiple Elysion files whitin a folder and output them in a destination folder')
    .array('-d')
    .string('-c')
    .alias({
        "-c": ["--c"],
        "-d": ['--d']
    })

const options = cli.argv, elsconfig = fs.existsSync(path.join(process.cwd(), 'elsconfig.json')) || fs.existsSync(path.join(process.cwd(), '.elsconfig'));

if (Object.keys(options).length > 2 || elsconfig) {
    spawn('node', ['--enable-source-maps', '../lib/command.js', process.cwd(), ...process.argv.slice(2), '--cfg'].filter(Boolean), { 
        cwd: __dirname,
        stdio: 'inherit',
        env: options._
    });
} else {
    cli.showHelp()
}