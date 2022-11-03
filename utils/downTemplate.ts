
import path from 'node:path'
import download from 'download-git-repo'
import ora from 'ora'
import fileSave from 'file-save'
import { errorLog } from './log'

const spiner = ora('下载中')
/**
 * 下载模板
 * @param {*} url git下载地址
 * @param {*} name 项目名称
 * @returns 
 */
export const down = (url: string, name: string) => {
    spiner.start()
    return new Promise((resolve, reject) =>{
        download(url, name, { clone: true }, (err) => {
            if (err) {
                spiner.fail()
                errorLog('下载失败')
                reject(err)
            } else {
                spiner.stop()
                const cwd = process.cwd();
                const target = path.resolve(cwd, name || '.')
                const jsonfile = path.resolve(target, 'package.json')
                const jsondata = require(jsonfile)
                jsondata.name = name
                jsondata.version = '0.0.1'

                fileSave(jsonfile)
                    .write(JSON.stringify(jsondata, null, 2), 'utf8', () => {
                        resolve(null)
                    })
                    .end('\n')
                    .error(() => {
                        errorLog('下载失败')
                        reject()
                    })
               
            }
        })
    })
}