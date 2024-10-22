import React from 'react'

const  All:React.FC=()=> {
  return (
    <>
      <h2 className="m-4">All blog posts</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4 mx-3">
        <div className="col">
          <div className="card h-100">
            <img src="/Images2/Image-4.svg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Alcc Whitton * 1 Jan 2023</h5>
              <h3>Bill Walsh Leadership Lessons</h3>
              <p className="card-text">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</p>
              <button style={{border: 'none', outline: 'none', color: 'purple'}}>Leadership</button>
              <button style={{border: 'none', outline: 'none', color: 'darkblue'}}>Managenment</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="/Images2/Image-5.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Demi Wllkinson * 1 Jan 2023</h5>
              <h3>PM mental models</h3>
              <p className="card-text">Mental models are simple expressions of complex processes or relationships.</p>
              <button style={{border: 'none', outline: 'none', color: 'green'}}>Product</button>
              <button style={{border: 'none', outline: 'none', color: 'darkblue'}}>Research</button>
              <button style={{border: 'none', outline: 'none', color: 'orange'}}>Frameworks</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="/Images2/Image-6.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Candicc Wu * 1 Jan 2023</h5>
              <h3>What is Wireframing?</h3>
              <p className="card-text">Introduction to Wireframing and its Principles. Learn from the best in the industry.</p>
              <button style={{border: 'none', outline: 'none', color: 'darkblue'}}>Design</button>
              <button style={{border: 'none', outline: 'none', color: 'purple'}}>Research</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="/Images2/Image-7.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Natail craig *  Jan 2023</h5>
              <h3>How collaboration makes us better designers</h3>
              <p className="card-text">Collaboration can make our teams stronger, and our individual design better.</p>
              <button style={{border: 'none', outline: 'none', color: 'purple'}}>Design</button>
              <button style={{border: 'none', outline: 'none', color: 'darkblue'}}>Research</button>
            </div>
          </div>
        </div>
        <div className="col">
            <div className="card h-100">
              <img src="/Images2/Image-8.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Drew Cano * 1 Jan 2023</h5>
                <h3>Our top 10 Javascript frameworks to use</h3>
                <p className="card-text">JavaScript frameworks make development easy with extensive features and functionalities.</p>
                <button style={{border: 'none', outline: 'none', color: 'green'}}>Software Development</button>
                <button style={{border: 'none', outline: 'none', color: 'hotpink'}}>tools</button>
                <button style={{border: 'none', outline: 'none', color: 'hotpink'}}>Saas</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="/Images2/Image-9.png" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Oriando Diggs * 1 Jan 2023</h5>
                <h3>Podcast: Creating a better CX Community</h3>
                <p className="card-text">Starting a community doesn't need to be complicated, but how do yu get started?</p>
                <button style={{border: 'none', outline: 'none', color: 'purple'}}>Podcasts</button>
                <button style={{border: 'none', outline: 'none', color: 'darkblue'}}>Customer Success</button>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default All;
export {}; 