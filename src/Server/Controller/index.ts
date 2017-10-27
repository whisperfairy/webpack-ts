/**
 *
 * index.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/22
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import {counter as counterDao,counterADD as counterADDDAO} from '../dao/index'
export let counter = 1;
console.log('import ',counter);
export function counterADD(){
    counterADDDAO();
    console.log(counterDao)
}