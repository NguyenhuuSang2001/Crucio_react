import React from "react";
function Footer() {
    const icons = [
        "bxl:facebook-square",
        "akar-icons:twitter-fill",
        "akar-icons:instagram-fill",
        "akar-icons:linkedin-box-fill",
        "akar-icons:dribbble-fill",
        "akar-icons:youtube-fill",
    ];
    return (
        <footer className="block bg_black">
            <div>
                <a href="#">
                    <img
                        src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png"
                        alt="logo"
                    />
                </a>
            </div>
            <div className="info-task">
                <ul>
                    {icons.map((icon, index) => (
                        <li key={index}>
                            <a href="#">
                                <iconify-icon icon={icon}></iconify-icon>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div id="all_right">© 2017. Crucio. All Rights Reserved.</div>
        </footer>
    );
}

export default Footer;
