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
import {foo} from '../server';
export function bar() {
    console.log('bar');
    if (Math.random() > 0.5) {
        foo();
    }
}