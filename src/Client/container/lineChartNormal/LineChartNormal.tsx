
import * as React from "react"
const {PureComponent} = React;
import RealtimeEchartComponent,{orderProps as IRealProps}from '../../component/RealtimeEchartComponent/RealtimeEchartComponent'
import * as Moment from 'moment'
interface orderProps extends IRealProps{
  
}
interface orderState{
    option:any
}

class LinechartNormal extends PureComponent<orderProps,orderState>{
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
    getOption(props) { 
        const {} = props;
        let now=Moment();
        var option = {
            title: {
                text: 'ECharts init'
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
                type:"category",
                data:[now.subtract(60,'seconds').format('hh:mm:ss')
                ,now.subtract(50,'seconds').format('hh:mm:ss')
                ,now.subtract(45,'seconds').format('hh:mm:ss')
                ,now.subtract(30,'seconds').format('hh:mm:ss')
                ,now.subtract(20,'seconds').format('hh:mm:ss')
                ,now.subtract(10,'seconds').format('hh:mm:ss')
                ]
                //props.series.data[0]||props.series.data[x]
            },
            yAxis: {},
            
            series: [{
                name: 'A项电压',
                type: 'line',
                animationEasing: 'elasticOut',
                data: [5, '-', 15, 20, 30, 40],
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
                data: [10, 20, 36, 10, 10, 20]
            },{
                name: 'C项电压',
                type: 'line',
                animationEasing: 'elasticOut',
                data: [50, 20, 16, 17, 20, 10]
            }]
        };

        return option;
    }
    render(){
        return (<RealtimeEchartComponent  option={this.state.option} theme='chalk'></RealtimeEchartComponent>)
    }
}
export default LinechartNormal;