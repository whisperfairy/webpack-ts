import * as React from 'react'
import {PureComponent} from 'react'
import * as echarts from 'echarts'
import './RealtimeEchartComponent.scss'
export interface orderProps{
    borders?: boolean;
    className?: string;
    theme?:any;
    option?:any;
    notMerge?:boolean;
    lazyUpdate?:boolean;
}
export interface orderState{
    
}
class RealtimeEchartComponent extends PureComponent<orderProps,orderState>{
    ChartContainer:HTMLDivElement;
    
    getEchartsInstance():any{
        return echarts.init(this.ChartContainer, this.props.theme);
        //   return echarts.getInstanceByDom(this.ChartContainer) || echarts.init(this.ChartContainer, this.props.theme);
    }

    renderEchartDom():any {
    // init the echart object
    let echartObj = this.getEchartsInstance();
    // set the echart option
    echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
    return echartObj;
    }
    componentDidMount():void{
        this.renderEchartDom();
    }
    componentWillUpdate():void{
        this.renderEchartDom();
    }
     componentWillUnmount():void{
      echarts.dispose(this.ChartContainer);
  }
    render(){   
       return <div className="Echart_contianer"ref={(ref)=>{this.ChartContainer=ref}}></div>
    }
}

export default RealtimeEchartComponent;
