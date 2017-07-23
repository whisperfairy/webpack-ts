/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import * as React from 'react'
import {PureComponent} from 'react'
import './app.scss'
import LineChartReal from '../LineChartRealtime/LineChartReal'
import '../../asset/theme/chalk.js'
interface orderProps{

}
interface orderState{

}
export default class App extends PureComponent <orderProps,orderState>{
    constructor(props:orderProps) {
        super(props);
        console.log('App' + 'constructor' + arguments);
        this.state={
            per:1
        }
    }

    componentWillMount() {
        console.log('App' + ' componentWillMount' + arguments);
    }

    componentDidMount() {
        console.log('App' + ' componentDidMount' + arguments);
    }

    componentWillReceiveProps() {
        console.log('App' + ' componentWillReceiveProps' + arguments);
    }

    shouldComponentUpdate() {
        console.log('App' + ' shouldComponentUpdate' + arguments);
        return true;
    }

    componentWillUpdate() {
        console.log('App' + ' componentWillUpdate' + arguments);
    }

    componentDidUpdate() {
        console.log('App' + ' componentDidUpdate' + arguments);
    }

    componentWillUnmount() {
        console.log('App' + ' componentWillUnmount' + arguments);
    }

    render() {
        console.log('App' + 'rendering');
        return (
            <div className="Chart_List" >
              <div className="charts_flex">

              </div>
              <div className="charts_flex">
                  <LineChartReal></LineChartReal>
              </div>
              <div className="charts_flex">
                  <LineChartReal></LineChartReal>
              </div>
              <div className="charts_flex"></div>
              <div className="charts_flex"></div>
              <div className="charts_flex"></div>
            </div>
          
        )
    }
}

