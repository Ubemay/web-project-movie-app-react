import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { homeData } from "../../someData";
import "./moviepage.css";

const MoviePage = () => {
    const {id} = useParams();
    const [item, setItem] = useState(null)

    useEffect(() => {
      let item = homeData.find((item) => item.id === parseInt(id))
      if (item) {
        setItem(item)
      }
    }, [id])

    return (

      <>

          {({ items }) => {
              const item = homeData.find(item => item.id === parseInt(id));
          }}
          {item ? (
          <>
            <section className='singlePage'>
              <div className='singleHeading'>
                <h1>{item.name} </h1>
              </div>
              <div className='container'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className='para'>
                  <h3>Date : {item.date}</h3>
                  <p>{item.desc}</p>
                  <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                  <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                  <p>Get access to the direct Project Overview with this report. Just by a quick glance, you’ll have an idea of the total tasks allotted to the team, number of milestones given & completed, total Links created for the project and the total time taken by all the users. Each section would elaborate the data further, if chosen.</p>
                </div>
            
              </div>
            </section>
          </>
        ) : (
          "This page doesn't exist"
        )}
      </>
    )
  };

  export default MoviePage;