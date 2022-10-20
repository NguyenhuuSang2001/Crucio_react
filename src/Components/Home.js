import React from "react";
export function Home() {
    const home = {
        title: "CRUCIO",
        content: "POWERFUL WEBSITES",
    };
    return (
        <div id="home">
            <h1>{home.title}</h1>
            <div className="line_center"></div>
            <h3>{home.content}</h3>
        </div>
    );
}
