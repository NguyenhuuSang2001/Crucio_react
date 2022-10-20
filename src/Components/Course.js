import React from "react";
import { useState } from "react";

export function Course({ course, onClick }) {
    // if(typeof props.callback === 'function'){
    // console.log({ course });
    // }
    return (
        <React.Fragment>
            <h1 onClick={() => onClick(course)}>{course.title}</h1>
            <h2> {course.description} </h2>
        </React.Fragment>
    );
}
const courses_ = [
    {
        id: 7,
        title: "Kiến Thức Nhập Môn IT",
        slug: "lessons-for-newbie",
        description:
            "Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.",
        image: "courses/7.png",
        icon: "courses/7/6200b81f52d83.png",
        video_type: "youtube",
        video: "M62l1xA5Eu8",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 85528,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: false,
        user_progress: 0,
        last_completed_at: null,
        image_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png",
        video_url: "https://www.youtube.com/watch?v=M62l1xA5Eu8",
        landing_page_url: "/courses/lessons-for-newbie",
        is_pre_order: false,
        is_published: true,
    },
    {
        id: 2,
        title: "HTML CSS từ Zero đến Hero",
        slug: "html-css",
        description:
            "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.",
        image: "courses/2.png",
        icon: "courses/2/6200aecea81de.png",
        video_type: "youtube",
        video: "R6plN3FvzFY",
        old_price: 0,
        price: 0,
        pre_order_price: 0,
        students_count: 131870,
        is_pro: false,
        is_coming_soon: false,
        is_selling: false,
        published_at: "2020-02-10T14:23:13.000000Z",
        is_registered: false,
        user_progress: 0,
        last_completed_at: null,
        image_url: "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
        icon_url:
            "https://files.fullstack.edu.vn/f8-prod/courses/2/6200aecea81de.png",
        video_url: "https://www.youtube.com/watch?v=R6plN3FvzFY",
        landing_page_url: "/courses/html-css",
        is_pre_order: false,
        is_published: true,
    },
];
export function ListCourse() {
    const [courses, setCourses] = useState([]);
    const handleClick = (course) => {
        console.log(course.title);
    };
    const clickButton = () => {
        setCourses([courses_[Math.floor(Math.random() * courses_.length)]]);
    };

    const list = courses.map((course, index) => {
        return <Course key={index} course={course} onClick={handleClick} />;
    });

    return (
        <div className="ListCourse">
            {list}
            <button onClick={clickButton}>Click me!</button>
        </div>
    );
}

// export default ListCourse;
