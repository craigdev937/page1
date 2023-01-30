import React from "react";
import "./Projects.css";

type SHO = {
    show: boolean
};

export const Projects = ({show}: SHO): JSX.Element => {
    return (
        <React.Fragment>
            <section id="projects" className="projects">
                <h1 className={show ? "Show" : "Hide"}>Projects</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
            </section>
        </React.Fragment>
    );
};


