import { errorLog } from './log'
export default (msg: string) => {
    errorLog(msg)
    process.exit(1)
}