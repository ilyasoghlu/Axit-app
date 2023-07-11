import React from 'react'

function Header() {
    return (
        <>
            <nav  class="bg-black" >
                <div id="nav" class="container">
                    {/* <a id="logo" class="" href=""><img src="img/logo.png" alt="logo"></a> */}
                    <ul id="menu" class="txt-white">
                        <li><a href="" class="">Features</a></li>
                        <li><a href="" class="">About</a></li>
                        <li><a href="" class="">Printing</a></li>
                        <li><a href="" class="">Reviews</a></li>
                        <li><a href="" class="">Contact</a></li>
                    </ul>  
                </div>               
            </nav>
        </>
    )
}

export default Header