import path from 'path'
import fs from 'fs-extra'
import prompts from 'prompts'
import { successLog, markLog } from '../utils/log'
import { down } from '../utils/downTemplate'
import templatesJson from '../config/template.json'
import exit from '../utils/exit'

const success = (name: string) => {
    markLog(`\n${name} 创建成功`);
    console.log('\n\n ======================================================= \n\n')
    successLog('执行下面命令启动项目\n');
    successLog(`cd ${name}`);
    successLog(`npm install`);
    successLog('npm run dev');
}

export default async (name: string) => {
    // 获取当前执行命令的路径
    const cwd = process.cwd();
    const target = path.resolve(cwd, name || '.')
    if (fs.existsSync(target)) {
        exit('当前路径下已存在该文件夹');
    }

    try {

        const answers = await prompts([
            {
                type: 'select',
                name: 'template',
                message: '请选择下方的模板？',
                choices: templatesJson,
                initial: 0
            }
        ])
        if (answers.template) {
            await down(answers.template, name)
            success(name)  
        }

    } catch(error) {
        exit(error.message)
    }
}
