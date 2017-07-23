
import * as React from "react"
const {PureComponent} = React;
import RealtimeEchartComponent,{orderProps as IRealProps}from '../../component/BaseRealtimeEchartComponent/RealtimeEchartComponent'
import * as moment from 'moment'
import '../../asset/theme/china'
interface orderProps extends IRealProps{
  
}
interface orderState{
    option:any
}

class LineChartReal extends PureComponent<orderProps,orderState>{
        timeTicket:any;
        count:any;
        constructor(props:orderProps){
            super(props);
            this.state={
                option:this.getOption()
            }
        }
  
    componentDidMount() {
     }
    componentDidUpdate(prevProps){

    }
    getOption() { 
        let now=moment();
        var option = {
            title: {
                text: '静态折线图'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                right:0,
                data:['A项电压','B项电压','C项电压']
                //props.series.legent
            },
            xAxis: {
                type:"time",
           
            axisLabel:{
                formatter:(value)=>{
                    return moment(value).format('hh:mm:ss')
                }
            }
                // data:[now.subtract(60,'seconds').format('hh:mm:ss')
                // ,now.subtract(50,'seconds').format('hh:mm:ss')
                // ,now.subtract(45,'seconds').format('hh:mm:ss')
                // ,now.subtract(30,'seconds').format('hh:mm:ss')
                // ,now.subtract(20,'seconds').format('hh:mm:ss')
                // ,now.subtract(10,'seconds').format('hh:mm:ss')
                // ]
                //props.series.data[0]||props.series.data[x]
            },
            yAxis: {},
            
            series: [{
                name: 'A项电压',
                type: 'line',
                animationEasing: 'elasticOut',
                data: [
                 [now.subtract(60,'seconds').toDate(),5],
                 [now.subtract(50,'seconds').toDate(),10], 
                 [now.subtract(45,'seconds').toDate(),15], 
                 [now.subtract(30,'seconds').toDate(),20], 
                 [now.subtract(20,'seconds').toDate(),25],
                 [now.subtract(10,'seconds').toDate(),30]
                 ],
                symbolSize:4,
                itemStyle:{
                    normal:{
                    areaStyle:{
                        color:'rgba(255,0,0,0.2)'
                    },
                    borderColor:{
                    color:'rgba(255,0,0,0.2)'
                },
                borderWidth:2
                }
                }
            },{
                name: 'B项电压',
                type: 'line',
                animationEasing: 'elasticOut',
                data: [
                 [now.subtract(60,'seconds').toDate(),5],
                 [now.subtract(50,'seconds').toDate(),10], 
                 [now.subtract(45,'seconds').toDate(),15], 
                 [now.subtract(30,'seconds').toDate(),20], 
                 [now.subtract(20,'seconds').toDate(),25],
                 [now.subtract(10,'seconds').toDate(),30]
                 ]
            },{
                name: 'C项电压',
                type: 'line',
                animationEasing: 'elasticOut',
             data: [
                 [now.subtract(60,'seconds').toDate(),5],
                 [now.subtract(50,'seconds').toDate(),10], 
                 [now.subtract(45,'seconds').toDate(),15], 
                 [now.subtract(30,'seconds').toDate(),20], 
                 [now.subtract(20,'seconds').toDate(),25],
                 [now.subtract(10,'seconds').toDate(),30]
                 ]
            }]
        };

        return option;
    }
    render(){
        return (<RealtimeEchartComponent  option={this.state.option} theme='chalk'></RealtimeEchartComponent>)
    }
}
export default LineChartReal;