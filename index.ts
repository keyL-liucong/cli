#!/usr/bin/env node
import packageConfig from './package.json'
import init from './actions/init'

const { program } = require('commander');

// 这样输出-V或--version就能看到版本号了
program.version(packageConfig.version)

// 使用zhizu init my
program
  .command('init <name> [destination]')
  .description('init a project')
  .action((name: string) => {
    init(name)
  });

// program.option('-ig,--initgit', 'init git');

program.parse(process.argv);