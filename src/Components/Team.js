import React from "react";
export function Team() {
    const url_img =
        "https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/team";
    const arr = [1, 2, 3];
    return (
        <>
            <div id="team">
                <h3>OUR TEAM</h3>
                <div className="line_center"></div>
                <div className="box_team_detail">
                    {arr.map((item, index) => (
                        <div key={index}>
                            <img src={url_img + item + ".jpg"} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <Statistical />
        </>
    );
}

function Statistical() {
    const data = [
        {
            text: "Clients",
            number: 150,
        },
        {
            text: "Projects",
            number: 620,
        },
        {
            text: "Awards",
            number: 25,
        },
        {
            text: "Coffee",
            number: 940,
        },
    ];
    return (
        <div id="statistical" className="block">
            {data.map((item, index) => (
                <div key={index}>
                    <div>{item.number}</div>
                    <div>{item.text}</div>
                </div>
            ))}
        </div>
    );
}
