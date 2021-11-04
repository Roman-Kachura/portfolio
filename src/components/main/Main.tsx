import React from "react";
import {Home} from "./homepage/Home";
import {Skills} from "./skillspage/Skills";
import {Works} from "./workspage/Works";
import {Remote} from "./remote/Remote";
import {Contacts} from "./contacts/Contacts";

export const Main = () => {
    return (
        <main>
            <Home/>
            <Skills/>
            <Works/>
            <Remote/>
            <Contacts/>
        </main>
    )
}