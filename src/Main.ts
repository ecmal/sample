import {One} from './sub/One';
import {Two} from './sub/Two';

export class Main {
    static from(target:any){
        console.info('Main.from',target);
    }
    public one:One = new One();
    public two:Two = new Two();
    constructor(config){
        console.info("Main Jan");
    }
    printNodeModules(){
        //console.info(Object.keys(Buffer).join(' '));
        //console.info(Object.keys(process).join(' '));
    }
    printModules(){
        console.info(Object.keys(System));
    }
}

new Main('Test').printModules();