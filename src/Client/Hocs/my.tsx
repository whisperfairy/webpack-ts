/**
 *
 * my.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2017/9/3
 *
 * @内容 作用
 * @内容 作用
 */



'use strict';
import * as React from 'react';
import {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

function mapStatetoProps(state, ownProps) {
    return {}
}
function mapDispatchtoProps(dispatch) {
    //return bindActionCreators({
    //
    //}, dispatch)
    return {}
}
interface orderProps {

}

export function Hoc(a) {
    return function (Comp: React.ComponentClass<any> | React.SFC<any>) {
        class myComponent extends PureComponent <orderProps, any> {

            render() {
                return (
                    <Comp />
                )
            }
        }
        return connect(mapStatetoProps, mapDispatchtoProps)(myComponent)
    }
}