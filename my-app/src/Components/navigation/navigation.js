import React from 'react'
import style from 'styled-components'
import avatar from '../../images/avatar.png'
function navigation(){
    return(
        <navstyle>
            <div className="user-con">
                <img src={avatar} alt=''/>
                <div className="text">
                    <h2>mike</h2>
                    <p>your money</p>

                </div>
            </div>
            <ul className="menu-items"></ul>

        </navstyle>
    )


}
const navstyle=style.nav``;