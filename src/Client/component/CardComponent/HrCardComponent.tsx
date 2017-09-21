/**
 *
 * HrCardComponent.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/10
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, {PureComponent} from 'react'
import './_cards.scss';
export interface IHrCardComponent{

}
const HrCardComponent : React.SFC<any>=()=>{
    return (
        <div className="card card-product" >
            <div className="card-image" >
                <a href="#pablo">
                    <img className="img" src="../assets/img/card-2.jpeg"/>
                </a>
                <div className="ripple-container"></div></div>
            <div className="card-content">
                <div className="card-actions">
                    <button type="button" className="btn btn-danger btn-simple fix-broken-card">
                        <i className="material-icons">build</i> Fix Header!
                    </button>
                    <button type="button" className="btn btn-default btn-simple"  data-placement="bottom" title="" data-original-title="View">
                        <i className="material-icons">art_track</i>
                    </button>
                    <button type="button" className="btn btn-success btn-simple"  data-placement="bottom" title="" data-original-title="Edit">
                        <i className="material-icons">edit</i>
                    </button>
                    <button type="button" className="btn btn-danger btn-simple" data-placement="bottom" title="" data-original-title="Remove">
                        <i className="material-icons">close</i>
                    </button>
                </div>
                <h4 className="card-title">
                    <a href="#pablo">Cozy 5 Stars Apartment</a>
                </h4>
                <div className="card-description">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                </div>
            </div>
            <div className="card-footer">
                <div className="price">
                    <h4>$899/night</h4>
                </div>
                <div className="stats pull-right">
                    <p className="category"><i className="material-icons">place</i> Barcelona, Spain</p>
                </div>
            </div>
        </div>
    )
}

export default HrCardComponent;