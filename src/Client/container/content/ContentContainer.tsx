/**
 *
 * ContentContainer.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/10
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, {PureComponent} from 'react'

import './content.scss'
import {Card,Row,Col,Select,Icon} from 'antd'
const Option = Select.Option;
import CardIconSun from '../../component/CardIconComponent/CardIconSun'
import CardIconNight from '../../component/CardIconComponent/CardIconNight'
import CardIconRainy from '../../component/CardIconComponent/CardRainyIcon'
const ReactHighcharts = require('react-highcharts');
class ContentContainer extends PureComponent<any,any> {
    static displayName = 'ContentContainer';

    constructor(props) {
        super(props);
        console.log('ContentContainer ' + 'constructor' + arguments);
        this.state={
            month:1
        }
    }


    render() {
        const config1 ={
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height:300
            },
            title: {
                text: '一月份用电分布'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: '一号楼',
                    y: 10
                }, {
                    name: '二号楼',
                    y: 20,
                    sliced: true,
                    selected: true
                }, {
                    name: '三号楼',
                    y: 30
                }, {
                    name: '四号楼',
                    y: 10
                }, {
                    name: '实验室',
                    y: 20
                }, {
                    name: '厨房',
                    y: 10
                }]
            }]
        };
        const config2 ={
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height:300
            },
            title: {
                text: '二月份用电分布'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: '一号楼',
                    y: 15
                }, {
                    name: '二号楼',
                    y: 15,
                    sliced: true,
                    selected: true
                }, {
                    name: '三号楼',
                    y: 15
                }, {
                    name: '四号楼',
                    y: 15
                }, {
                    name: '实验室',
                    y: 15
                }, {
                    name: '厨房',
                    y: 25
                }]
            }]
        };
        const config3 ={
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie',
                height:300
            },
            title: {
                text: '三月份用电分布'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: '一号楼',
                    y: 56.33
                }, {
                    name: '二号楼',
                    y: 24.03,
                    sliced: true,
                    selected: true
                }, {
                    name: '三号楼',
                    y: 10.38
                }, {
                    name: '四号楼',
                    y: 4.77
                }, {
                    name: '实验室',
                    y: 0.91
                }, {
                    name: '厨房',
                    y: 0.2
                }]
            }]
        };
        const configArr=[config1,config2,config3];
        const lineconfig= {
            chart: {
                type: 'spline',
                height:300
            },
            title: {
                text: 'Monthly Average Temperature'
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                },
                labels: {
                    formatter: function () {
                        return this.value + '°';
                    }
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true
            },
            plotOptions: {
                spline: {
                    marker: {
                        radius: 4,
                        lineColor: '#666666',
                        lineWidth: 1
                    }
                }
            },
            series: [{
                name: '二号楼',
                marker: {
                    symbol: 'square'
                },
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, {
                    y: 26.5,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
                    }
                }, 23.3, 18.3, 13.9, 9.6]

            }, {
                name: '一号楼',
                marker: {
                    symbol: 'diamond'
                },
                data: [{
                    y: 3.9,
                    marker: {
                        symbol: 'url(https://www.highcharts.com/samples/graphics/snow.png)'
                    }
                }, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]
        };
        const dconfing={
            chart: {
                renderTo: 'container',
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 15,
                    beta: 15,
                    depth: 50,
                    viewDistance: 25
                }
            },
            title: {
                text: '年度用电分布'
            },

            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        }
        let _=this;
        return (
            <div className="nfe-container">
                 <div className="nfe-container-header">
                     <Row>
                         <Col span={12} offset={2} >
                                <span>精准林业北京市重点实验室</span>
                         </Col>
                         <Col span={10}>   <div className="header-menu">
                             <div className="header-menu-col">
                                 <div>
                                     胡戎
                                 </div>
                             </div>
                             <div className="header-menu-col">
                                 <div>
                                     <Icon type="user"></Icon>
                                 </div>
                             </div>
                             <div className="header-menu-col">
                                 <div>
                                     <Icon type="setting"></Icon>
                                 </div>
                             </div>
                         </div></Col>
                     </Row>
                 </div>
                 <div className="nfe-container-content">
                     <Row>
                         <Col span={9} offset={2}>
                     <Card title={<CardIconSun></CardIconSun>} extra={<div><Select size="large" defaultValue="2" style={{ width: 50 }} onChange={(val)=>{
                     _.setState({
                         month:val
                     })
                     }
                     }>
                         <Option value={0}>1</Option>
                         <Option value={1}>2</Option>
                         <Option value={2}>3</Option>
                     </Select>月份用电量分布</div>} >
                         <ReactHighcharts config = {configArr[this.state.month]}></ReactHighcharts>
                     </Card>
                         </Col>
                         <Col span={9} offset={2}>
                     <Card title={<CardIconNight></CardIconNight>} >
                         <ReactHighcharts config = {lineconfig}></ReactHighcharts>
                     </Card>
                         </Col>
                     </Row>
                 <Row>
                     <Col span={20} offset={2}>
                         <Card title={<CardIconRainy></CardIconRainy>}>
                         <ReactHighcharts config = {dconfing}></ReactHighcharts>
                     </Card>
                     </Col>
                 </Row>
                 </div>
            </div>
        )
    }
}
export default ContentContainer;