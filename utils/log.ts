import chalk from 'chalk'
import figlet from 'figlet'
import standard from 'figlet/importable-fonts/Standard.js'
figlet.parseFont('Standard', standard)

/**
 * 提示
 * @param msg 反馈文字
 */
export const warnLog = (msg: string) => {
    console.log(chalk.yellow(msg))
}

/**
 * 提示
 * @param msg 反馈文字
 */
export const errorLog = (msg: string) => {
    console.log(chalk.red(msg))
}

/**
 * 提示
 * @param msg 反馈文字
 */
export const successLog = (msg: string) => {
    console.log(chalk.green(msg))
}

/**
 * 提示
 * @param msg 反馈文字
 */
export const markLog = (msg: string) => {
    console.log(chalk.magenta(msg))
}

/**
 * 
 * @param msg 返回文字
 * @param callback 
 */
export const figletLog = (msg: string) => {
    figlet(msg, (err, data) => {
        
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
    });
}