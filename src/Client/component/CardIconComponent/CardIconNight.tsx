/**
 *
 * CardIconNight.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/11
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, {PureComponent} from 'react'
export interface ICardIconNightProps{

}
const CardIconNight : React.SFC<ICardIconNightProps>=()=>{
    return (
        <div className="night">
            <span className="moon"></span>
            <span className="spot1"></span>
            <span className="spot2"></span>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    )
}

export default CardIconNight;