import { useEffect, useState } from "react";

export function Content() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((posts) => {
                setData(posts);
            });
        console.log("Re-render");
    }, []);
    return (
        <div>
            <button onClick={() => setShow((prev) => !prev)}>Click!</button>
            <ul>
                {/* {console.log(data)} */}

                {show &&
                    data.map((item) => <li key={item.id}>{item.title}</li>)}
            </ul>
            {/* {console.log(data)} */}
        </div>
    );
}
