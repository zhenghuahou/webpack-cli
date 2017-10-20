import entry from './entry'
import alias from './alias'
import provide from './provide'
import conf from './conf'
import {resolve} from '../util'

const logoPath = resolve(conf.logoPath)
console.log(' logoPath:',logoPath);
export {
    entry,
    alias,
    provide,
    conf,
    logoPath
}