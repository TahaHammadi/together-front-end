import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <img className="topLogo"
                    src="\assets\LOGO-TOGETHER.png" alt="" />
                <i className="topIcon fa-brands fa-facebook-square"></i>
                <i className="topIcon fa-brands fa-twitter-square"></i>
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </div>


            <div className="topCenter">
                <div class="search-box">
                    <input type="text" placeholder="search..." />
                    <a href="##" class="icon">
                        <i class="fas fa-search"></i>
                    </a>
                </div>
            </div>

            <div className="topRight">
                {/* <ul className="topList">
                    < li className="topListItem">HOME</li>
                    < li className="topListItem">ABOUT</li>
                    < li className="topListItem">CONTACT</li>
                    < li className="topListItem">WRITE</li>
                    < li className="topListItem">LOGOUT</li>
                </ul> */}
                <nav>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">WRITE</a>
                    <a href="#">CONTACT</a>
                    <a href="#">LOGOUT</a>
                    <div class="animation start-home"></div>
                </nav>


                <img className="topImg"
                    src="\assets\profile-photo.jpg" alt="" />
                {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
            </div>

        </div>
    )
}
