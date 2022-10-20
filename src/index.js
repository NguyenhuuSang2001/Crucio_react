import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
import "./Css/style.css";
import App from "./App";
import { ListCourse } from "./Components/Course";
import reportWebVitals from "./reportWebVitals";
import { Content } from "./Components/ExampleUseEffect";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Service } from "./Components/Service";
import { Team } from "./Components/Team";
import { Portfolio } from "./Components/Portfolio";
import { Contact } from "./Components/Contact";
import Footer from "./Components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <Home />
        <About />
        <Service />
        <Team />
        <Portfolio />
        <Contact />
        <Footer />
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
