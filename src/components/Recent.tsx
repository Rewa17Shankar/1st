import React from 'react';

const Recent: React.FC = () => {
  return (
    <>
     <h2 className="m-3">Recent blog posts</h2>
      <div className="recent-content row d-flex align-items-stretch mx-auto">
        <div className="col-md-6 d-flex flex-column mb-3">
          <div className="card h-100">
            <img src="/Images2/Image.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Olivia Rhye * 1 Jan 2023</h5>
              <h3>UX review presentation</h3>
              <p className="card-text">
                How do you create compelling presentations that wow colleagues and impress your manager?
              </p>
              <button style={{ border: 'none', outline: 'none', color: 'purple' }}>Design</button>
              <button style={{ border: 'none', outline: 'none', color: 'darkblue' }}>Research</button>
              <button style={{ border: 'none', outline: 'none', color: 'hotpink' }}>Presentation</button>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 d-flex flex-column mb-3">
          <div className="card mb-3 h-100">
            <div className="row g-0 h-100">
              <div className="col-md-4 col-sm-12">
                <img
                  src="/Images2/Image-1.png"
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-8 col-sm-12 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title">Phoenix Baker * 1 Jan 2023</h5>
                  <h3>Migrating to Linear 101</h3>
                  <p className="card-text">
                    Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get...
                  </p>
                  <button style={{ border: 'none', outline: 'none', color: 'green' }}>Design</button>
                  <button style={{ border: 'none', outline: 'none', color: 'hotpink' }}>Research</button>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 h-100">
            <div className="row g-0 h-100">
              <div className="col-md-4 col-sm-12">
                <img
                  src="/Images2/Image-2.png"
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="col-md-8 col-sm-12 d-flex align-items-center">
                <div className="card-body">
                  <h5 className="card-title">Lana Stoiner * 1 Jan 2023</h5>
                  <h3>Building your API Stack</h3>
                  <p className="card-text">
                    The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing...
                  </p>
                  <button style={{ border: 'none', outline: 'none', color: 'green' }}>Design</button>
                  <button style={{ border: 'none', outline: 'none', color: 'hotpink' }}>Research</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'start', width: '100%', gap: '20px', margin: '18px' }}>
        <div style={{ flex: 1 }}>
          <img src="/Images2/Image-3.png" alt="" style={{ width: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ flex: 1 }}>
          <h5>Olivia Rhye * 1 Jan 2023</h5>
          <h3>Grid system for better Design User Interface</h3>
          <p>
            A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal
            lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid
            systems are used to create a consistent look and feel across a website, and can help to make the layout more
            visually appealing and easier to navigate.
          </p>
          <button style={{ border: 'none', outline: 'none', color: 'purple' }}>Design</button>
          <button style={{ border: 'none', outline: 'none', color: 'hotpink' }}>Interface</button>
        </div>
      </div>
    </>
  );
};

export default Recent;
export {}; 
