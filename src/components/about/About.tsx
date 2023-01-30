import React from "react";
import "./About.css";

type REF = {
    myRef: React.MutableRefObject<HTMLElement | null>
};

export const About = ({myRef}: REF): JSX.Element => {
    return (
        <React.Fragment>
            <section ref={myRef} id="about" className="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta reprehenderit aspernatur, distinctio id consequatur ipsa? Debitis recusandae veritatis quos repudiandae ipsa laborum quam quaerat sit, numquam modi eius voluptate amet.</p>
            </section>
        </React.Fragment>
    );
};


