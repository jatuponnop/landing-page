import React from 'react'
import "./Banner.css"

let bannerData = {
  title: "React landing page",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur tenetur itaque qui necessitatibus magni aperiam nemo minus! Harum suscipit distinctio quod nihil quam labore assumenda sunt vitae, iusto error."
}

function Banner() {
  return (
    <div className='banner-bg'>
      <div className='container'>
        <div className='banner-con'>
          <div className='banner-text'>
            <h1>
              {bannerData.title}
            </h1>
            <p>
              {bannerData.desc}
            </p>
            <a href='#' className='banner-btn'>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner