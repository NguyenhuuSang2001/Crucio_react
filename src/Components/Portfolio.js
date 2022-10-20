import React from "react";

function Div_a(props) {
    return (
        <div>
            {console.log(props)}
            <a href="#" className={props.className}>
                {props.content}
            </a>
        </div>
    );
}

export function Portfolio() {
    const pre_url_img =
        "https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/work";
    const arr = [1, 2, 3, 4];
    const tag = ["All", "Graphic Design", "Web Design", "Web Development"];
    return (
        <div id="portfolio">
            <h3>OUR PORTFOLIO</h3>
            <div className="line_center"></div>
            <div className="list">
                {tag.map((item, index) => (
                    <Div_a
                        className={index === 0 ? "active" : ""}
                        content={item}
                        key={index}
                    />
                ))}
            </div>
            <div className="detail">
                {arr.map((item, index) => (
                    <div key={index}>
                        <a href="#">
                            <img src={pre_url_img + item + ".jpg"} alt="" />
                        </a>
                    </div>
                ))}
            </div>
            <div className="more">
                <button type="submit" className="up_case">
                    Load more
                </button>
            </div>
            <div className="block bg_white cl_black">
                <h2>Subscribe To Our Newsletter</h2>
                <input
                    className="email"
                    type="text"
                    placeholder="Enter your email..."
                />
                <button type="submit" className="up_case bg_white subcribe">
                    subcribe
                </button>
            </div>
            <div className="block">
                <h2>WANT TO DISCUSS YOUR NEW PROJECT?</h2>
                <button type="submit" className="up_case contact hover_white">
                    contact us
                </button>
            </div>
            <div className="block bg_black cl_white">
                <h3 className="up_case">TESTIMONIALS</h3>
                <div className="line_center boder_white"></div>
                <p className="cl_white with_80">
                    It is very important to take care of yourself, to achieve
                    success, but at the same time, it takes a lot of work and
                    pain. For let me come to a minimum, no one engages in any
                    kind of exercise unless he derives some benefit from it. But
                    whosoever rightly reproaches him in pleasure, and wishes to
                    be a hair's breadth away from pain, let him be spared
                    nothing.
                </p>
                <p className="al_c">- John K. -</p>
            </div>
            <div className="block img-logo bg_white">
                <div>
                    <img
                        src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client1-150x150.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <img
                        src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client2-150x150.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <img
                        src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client3-132x150.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <img
                        src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client4.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <img
                        src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client5.png"
                        alt="logo"
                    />
                </div>
                <div>
                    <img
                        src="https://crucio.riccardoborchi.it/wp-content/uploads/2017/03/logo-client6.png"
                        alt="logo"
                    />
                </div>
            </div>
        </div>
    );
}
