import React, {useState} from 'react'
import s from './Login.module.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from '../../assets/img/logo.svg'



const Login = () => {
    const [pwdMode, setMode] = useState(false)
    return (
        <Container style={{height: '100%'}}>
            <Row className={s.jcc}>
                <Col lg={6}>
                    <div className={s.loginContainer}>
                        <div className={s.logo}>
                            <img src={logo} alt="#logo"/>
                        </div>
                        <div className={s.title_form}>Вход</div>
                        <form>
                            <div className={s.login}>
                                <label htmlFor="login">Логин</label>
                                <input autoFocus={true} id='login' name='login'/>
                            </div>
                            <div className={s.pwd}>
                                <label htmlFor="password">Пароль</label>
                                <div className={s.eye}>
                                    <input type={pwdMode ? 'text' : 'password'} id='password' name='password'/>
                                    {pwdMode ? <svg onClick={() => setMode(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                        :  <svg onClick={() => setMode(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.12 14.12C13.8454 14.4147 13.5141 14.6511 13.1462 14.8151C12.7782 14.9791 12.3809 15.0673 11.9781 15.0744C11.5753 15.0815 11.1752 15.0074 10.8016 14.8565C10.4281 14.7056 10.0887 14.481 9.80385 14.1961C9.51897 13.9113 9.29439 13.5719 9.14351 13.1984C8.99262 12.8248 8.91853 12.4247 8.92563 12.0219C8.93274 11.6191 9.02091 11.2218 9.18488 10.8538C9.34884 10.4858 9.58525 10.1546 9.88 9.87999M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68189 3.96914 7.6566 6.06 6.05999L17.94 17.94ZM9.9 4.23999C10.5883 4.07887 11.2931 3.99833 12 3.99999C19 3.99999 23 12 23 12C22.393 13.1356 21.6691 14.2047 20.84 15.19L9.9 4.23999Z" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M1 1L23 23" stroke="#D1D1D1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    }
                                </div>
                            </div>
                            <button>Войти</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}


export default Login