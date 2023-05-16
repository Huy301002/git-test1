import React, { Component } from 'react'
export default class Navigation extends Component {
render(){
return (
        <div className='title'>
            <nav>
                <ul>
                    <a className='active' href='#home'>Home</a>
                    <a className='active' href='#new'>News</a>
                    <a className='active' href='#about'>About</a>
                    <a className='active' href='#contact'>Contact</a>
                </ul>
            </nav>
        </div>
        )
    }

}