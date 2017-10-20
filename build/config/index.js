import entry from './entry'
import alias from './alias'
import provide from './provide'
import upload from './upload'
import {resolve} from '../util'

const logoPath = resolve('src','assets/logo.png')

export {
    entry,
    alias,
    provide,
    upload,
    logoPath
}