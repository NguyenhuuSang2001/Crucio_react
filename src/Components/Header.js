import React from "react";

export function Header() {
    const logo = {
        src: "https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg",
        class: "logo",
    };
    const menu = [
        "home",
        "about",
        "services",
        "team",
        "portfolio",
        "blog",
        "contact",
    ];
    const list_menu = menu.map((item, index) => (
        <li className="fl_r" key={index}>
            <a href={"#" + item} className="up_case">
                {item}
            </a>
        </li>
    ));
    return (
        <header>
            <div className="nav_top">
                <a href="#">
                    <img className={logo.class} src={logo.src} alt="logo" />
                </a>
                <button className="btn">Buy now</button>
            </div>
            <ul id="nav">
                <li className="fl_l">
                    <a href="">
                        <img
                            src="http://crucio.riccardoborchi.it/wp-content/uploads/2017/05/logo-1.png"
                            alt=""
                        />
                    </a>
                </li>
                {list_menu.reverse()}
                {/* {console.log(list_menu)} */}
            </ul>
        </header>
    );
}
