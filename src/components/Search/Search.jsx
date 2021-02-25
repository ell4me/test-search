import React, {useState} from 'react'
import s from './Search.module.css'
import Container from "react-bootstrap/Container";
import axios from "axios";


const Search = () => {
    let google = (e) => {
        e.preventDefault()
        axios.get(`https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fyoutube&redirect_uri=${window.location.href}/search&response_type=token&client_id=359923045279-etgia51g91srqgd891d1emctumbk4edm.apps.googleusercontent.com`, {
            withCredentials: true
        })
            .then(response=>{
                console.log(response)
            })
    }
    return (
        <Container className={s.mainSearch}>
            <div className={s.titleSearch}>Поиск видео</div>
            <form className={s.mainSearchForm}>
                <input name='search' placeholder='Что хотите посмотреть?'/>
                <button onClick={google}>Найти</button>
            </form>
        </Container>
    )
}

export default Search


