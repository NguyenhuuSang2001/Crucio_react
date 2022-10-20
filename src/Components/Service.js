import React from "react";
export function Service() {
    const service = {
        title: "services",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        icons: [
            [
                {
                    icon: "ion:desktop-outline",
                    text: "WEB DESIGN",
                },
                {
                    icon: "ion:albums",
                    text: "BRAND DESIGN",
                },
                {
                    icon: "eva:keypad-fill",
                    text: "UI/UX DESIGN",
                },
                {
                    icon: "ion:color-palette",
                    text: "GRAPHIC DESIGN",
                },
            ],
            [
                {
                    icon: "ant-design:camera-filled",
                    text: "PHOTOGRAPHY",
                },
                {
                    icon: "ic:baseline-videocam",
                    text: "VIDEO EDITING",
                },
                {
                    icon: "ion:pulse",
                    text: "DATA ANALYSIS",
                },
                {
                    icon: "bi:person-fill",
                    text: "CLIENT ASSISTANCE",
                },
            ],
        ],
    };
    return (
        <div id="services">
            <h3>{service.title.toUpperCase()}</h3>
            <div className="line_center"></div>
            <p>{service.content}</p>
            <div id="box_ser">
                {service.icons.map((items, ind) => (
                    <div key={ind}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <iconify-icon icon={item.icon}></iconify-icon>
                                <div>{item.text}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div id="start">
                <div>
                    WE CREATE <span>AWESOME</span> PROJECTS
                </div>
                <button className="hover_white">GET STARTED</button>
            </div>
        </div>
    );
}
