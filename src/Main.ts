import {One} from './sub/One';
import {Two} from './sub/Two';

import * as Fs from 'node/fs';
import * as Zlib from 'node/zlib';

export class Main {
    static from(target:any){
        console.info('Main.from',target);
    }
    public one:One = new One();
    public two:Two = new Two();
    constructor(config){
        console.info("Main");
    }
}

export default new Main("config");