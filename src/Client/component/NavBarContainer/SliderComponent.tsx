/**
 * Created by hurong on 2016/12/10.
 */

'use strict'
import React, {PureComponent} from 'react'
import './Slider.scss'
import {Icon,Menu}from 'antd'
const SubMenu=Menu.SubMenu;
class SliderComponent extends PureComponent<any,any>{
    static displayName = 'SliderComponent';

    render() {
        console.log('SliderComponent' + 'rendering');
        return (
            <div className="sidebar" data-color="orange" data-image="assets/img/sidebar-5.jpg">
            <div className="sidebar-wrapper">
                <div className="logo">
                    <a href="https://github.com/whisperfairy/" className="simple-text">
                        Whisper Fairy
                    </a>
                </div>

                <Menu
                    mode="inline"
                >
                    <SubMenu key="sub1" title={<span><Icon type="mail" /><span>用电管理</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>供水管理</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>供暖管理</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
                {/*<ul className="nav">*/}
                    {/*<li className="active">*/}
                        {/*<a href="dashboard.html">*/}
                            {/*<i className="pe-7s-graph"></i>*/}
                            {/*<p>Dashboard</p>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<a href="user.html">*/}
                            {/*<Icon type="link" />*/}
                            {/*<span>User Profile</span>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<a href="table.html">*/}
                            {/*<Icon type="link" />*/}
                            {/*<span>Table List</span>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<a href="typography.html">*/}
                            {/*<Icon type="link" />*/}
                            {/*<span>Typography</span>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<a href="icons.html">*/}
                            {/*<Icon type="link" />*/}
                            {/*<span>Icons</span>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<a href="maps.html">*/}
                            {/*<Icon type="link" />*/}
                            {/*<span>Maps</span>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                        {/*<a href="notifications.html">*/}
                            {/*<Icon type="link" />*/}
                            {/*<span>Notifications</span>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                    {/*<li className="active-pro">*/}
                        {/*<a href="upgrade.html">*/}
                            {/*<Icon type="link" />*/}
                            {/*<span>Upgrade to PRO</span>*/}
                        {/*</a>*/}
                    {/*</li>*/}
                {/*</ul>*/}
            </div>
                <div className="slider-background"></div>
            </div>
        )
    }
}
export default SliderComponent;