/**
 *
 * VHcontentHoc.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/21
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import * as React from 'react';
import {PureComponent} from 'react';

interface orderProps {

}

export function VHcontentHoc() {
    return function (Comp: React.ComponentClass<any> | React.SFC<any>) {
        return class VHcontentHocComponent extends PureComponent <orderProps, any> {

            render() {
                return (
                    <div style={{height:'100vh',width:"100%",padding:'30px'}}>
                       <Comp {...this.props}/>
                    </div>
                )
            }
        }
    }
}



