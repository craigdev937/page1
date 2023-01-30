import React from "react";
import { Home } from "../components/home/Home";
import { About } from "../components/about/About";
import { Projects } from "../components/projects/Projects";
import { Contacts } from "../components/contacts/Contacts";

export const Main = (): JSX.Element => {
    return (
        <React.Fragment>
            <Home />
            <About />
            <Projects />
            <Contacts />
        </React.Fragment>
    );
};


