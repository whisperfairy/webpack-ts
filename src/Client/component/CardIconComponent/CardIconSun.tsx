/**
 *
 * CardIconSun.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/11
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React from 'react'
import './CardBase.scss';
export interface ICardIconSunProps{

}
const CardIconSun:React.SFC<ICardIconSunProps> = ({}) => {
    return (<div className="hot">
        <span className="sun"></span>
        <span className="sunx"></span>
    </div>)
}
export default CardIconSun;
