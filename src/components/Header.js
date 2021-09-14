import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src='/images/logo.svg' />

            <NavMenu>
                <a href="">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>HOME</span>
                </a>
                <a href="">
                    <img src="/images/search-icon.svg" alt="" />
                    <span>SEARCH</span>
                </a>
                <a href="">
                    <img src="/images/watchlist-icon.svg" alt="" />
                    <span>WATCHLIST</span>
                </a>
                <a href="">
                    <img src="/images/original-icon.svg" alt="" />
                    <span>ORIGINALS</span>
                </a>
                <a href="">
                    <img src="/images/home-icon.svg" alt="" />
                    <span>MOVIES</span>
                </a>
                <a href="">
                    <img src="/images/series-icon.svg" alt="" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='https://images.unsplash.com/photo-1544923408-75c5cef46f14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGFycm90fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' />
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
height: 70px ;
background-color: #090b13;
display: flex;
align-items: center;
padding: 0 36px;
overflow-x: hidden;
`

const Logo = styled.img`
width: 80px;

`

const NavMenu = styled.div`
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;
a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    color: white;
    text-decoration: none;
    cursor: pointer;
    
    img{
        height: 20px;
    }
    span{
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
        &:after{
            content: '';
            height: 2px;
            background-color: white;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin:left center ;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            transform: scaleX(0);
        }
    }
    &:hover{
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
    }
}


`

const UserImg = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
cursor: pointer;
`