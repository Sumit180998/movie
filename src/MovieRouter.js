import React from "react";
import Home from "./Home/Home";
import Searchpage from "./Searchpage/Searchpage";
import MovieDetail from "./Detail_page/MovieDetail";
import Moviepage from "./Moviepage/Moviepage";
import PeopleDetail from "./PeopleDetail/PeopleDetail";


import {
    BrowserRouter,
    Routes,
    Route,
    Redirect,
    Navigate
  } from "react-router-dom"

export default function MovieRouter() {
    return (
        <BrowserRouter>
           <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Searchpage/:id" element={<Searchpage/>}/>
           <Route path="/MovieDetail/:id" element={<MovieDetail/>}/>
           <Route path="/PeopleDetail/:id" element={<PeopleDetail/>}/>
           <Route path="/Movie/:id" element={<Moviepage/>}/>
           
                <Route path="/" element={<Navigate replace to="/" />} />
              
            </Routes>
        </BrowserRouter>
    );
}