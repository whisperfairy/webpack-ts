/**
 * Created by whisper on 2016/11/11
 */
'use strict'
import React, {PureComponent} from 'react'
import Slider from '../../component/NavBarContainer/SliderComponent'
import Content from '../content/ContentContainer'
import './App.scss'
class App extends PureComponent<any,any> {
    render() {
        return (
            <div>
                <Slider></Slider>
                <Content></Content>
            </div>
        )
    }
}

export default (App);