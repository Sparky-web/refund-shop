import React from "react";
import {Nav, NavItem, NavLink} from "reactstrap"
import classnames from 'classnames';

export default (props) => {
    return (
        <Nav pills className="">
            <NavItem>
                <NavLink 
                    className={classnames({active: props.activeTab === '1'})}
                    onClick={() => props.toggle('1')}
                >
                    Aliexpress
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({active: props.activeTab === '2'})}
                    onClick={() => props.toggle('2')}
                >
                    Разное
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink
                    className={classnames({active: props.activeTab === '3'})}
                    onClick={() => props.toggle('3')}
                >
                    Аккаунты
                </NavLink>
            </NavItem>
        </Nav>
    )
}