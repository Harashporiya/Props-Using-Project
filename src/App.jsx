import React from 'react';
import { Component } from './Component.jsx';
import {Nav} from './Nav.jsx'
import './index.css';

export default function App(props) {
  return (
    <>
    <Nav/>
    <div id="id">
      <Component username="Iron Man" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkdyryyVdixcazTdLN2HoO09qpwSMiRpBeA&usqp=CAU" 
      paragraph="In the movies and the earlier comic books, Tony Stark is a human. Outside the suit, he does not have any superpowers, however he is very intelligent. "
      href="https://en.wikipedia.org/wiki/Iron_Man"
       />

     

      <Component username="Captain America"
      paragraph="Steve Rogers was a would-be U.S. Army enlistee rejected by recruiters because of his small size. He volunteers to receive a top-secret serum and transforms into a “super-soldier.” "
       img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4HhWWkSPCcViIxXz_vzjgyuQb0PJwkwZzg&usqp=CAU"
       href="https://en.wikipedia.org/wiki/Captain_America"/>



      <Component username="Thanose" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcxVywyCSaYjOKOEVKUY2gGxXK3ka1XtBSiQ&usqp=CAU"
      paragraph="Thanos is a supervillain appearing in American comic books published by Marvel Comics. Created by writer-artist Jim Starlin, the character first appeared in The Invincible Iron Man #55 (cover date February 1973)."
      href="https://en.wikipedia.org/wiki/Thanos"/>

      <Component username="Thor" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mzKCESArJCEAE8RYxmF5MVO8N66VgTv3Ew&usqp=CAU"
      paragraph="Thor Odinson is a superhero appearing in American comic books published by Marvel Comics.Lee, and scripter 
      (1962) and first received his own title with Thor #126 (1966).  " href="https://en.wikipedia.org/wiki/Thor_(Marvel_Comics)"/>

      <Component username="Spider Man" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0L3WFO872aFYW5j_DbMtWK6J3Ni5e_aRd06pAmGD9WwlsRHnysEiwJXNkhJGtmZHFUI&usqp=CAU"
      paragraph="Spider-Man is a fictional character in the Marvel Comics as well as one of the most well-known superheroes in the Marvel Universe. He is a character created by the writer Stan Lee and artist Steve Ditko. "
      href="https://simple.wikipedia.org/wiki/Spider-Man"/>
      
      <Component username="Hulk" paragraph="The Hulk is a superhero appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist Jack Kirby, the character first appeared in the debut issue of The Incredible Hulk (May 1962)."
       img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUImILH_2i-jR1cWpo9jkxTMtAQoqQKLYuDw&usqp=CAU" href="https://en.wikipedia.org/wiki/Hulk"/>

       <Component username="Loki" paragraph="This was simple fascinating to me, as this insinuates that the Loki from Thor 1 knew he was not getting the throne, and that he may have been slightly okay with it, besides the jealousy of Odin's love."
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLyW3PT6lQkLWUHXtOQ1UctU8zDlCdpUKilQ&usqp=CAU" href="https://en.wikipedia.org/wiki/Loki_(TV_series)"/>

       <Component img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoP6uZ-vTL2eLXEa_dL-36pdRHW8sz9jpzmg&usqp=CAU" username="Ant Man" 
       paragraph="Ant-Man is the name of several superheroes appearing in books published by Marvel Comics. Created by Stan Lee, Larry Lieber and Jack Kirby, Ant-Man's first appearance was in Tales to Astonish #27 (January 1962); "
       href="https://en.wikipedia.org/wiki/Ant-Man"/>

      </div>
      </>
  )
}