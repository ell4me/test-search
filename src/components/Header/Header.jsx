import React, {useState} from 'react'
import s from './Header.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from '../../assets/img/logo.svg'
import {NavLink} from "react-router-dom";


const Header = () => {
    let links = {search: 'Поиск', favourite: 'Избранное'}
    return (
        <div className={s.headerWrapper}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={9}>
                        <div className={s.left}>
                            <div className={s.logo}>
                                <NavLink to='/search'><img src={logo} alt="#"/></NavLink>
                            </div>
                            <ul>
                                {Object.keys(links).map(link => {
                                    return <li key={link}><NavLink to={`/${link}`}>{links[link]}</NavLink></li>
                                })}
                            </ul>
                        </div>
                    </Col>
                    <Col lg={3}>
                        <div className={s.right}>
                            <button>Выйти</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Header