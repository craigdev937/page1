import React from "react";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Contacts } from "../components/contacts/Contacts";
import { Navbar } from "./Navbar";

export const Main = (): JSX.Element => {
    const [show, setShow] = React.useState(false);
    const [viewNav, setViewNav] = React.useState(false);
    const myRef = React.useRef<HTMLElement | null>(null);

    React.useEffect(() => {
        console.log("myRef", myRef.current);
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                console.log("entry", entry);
                setShow(entry.isIntersecting);
            });
        observer.observe(myRef.current!);
    }, []);

    React.useEffect(() => {
        window.history.scrollRestoration = "manual";
    }, []);

    const changeView = (): void => {
        setViewNav(!viewNav);
    };

    const closeView = (): void => {
        setViewNav(false);
    };

    return (
        <section className="main">
            <Navbar 
                viewNav={viewNav} 
                changeView={changeView} 
                closeView={closeView}
            />
            <React.Fragment>
                <Home />
                <About myRef={myRef} />
                <Projects show={show} />
                <Contacts />
            </React.Fragment>
        </section>
    );
};


