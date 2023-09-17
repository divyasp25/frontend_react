import React from 'react';
import Carousel from './Carousel';
import CourseCard from './CourseCard';

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CourseCard title="C" />
          </div>
          <div className="col-md-4">
            <CourseCard title="C++" />
          </div>
          <div className="col-md-4">
            <CourseCard title="Java" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <CourseCard title="Python" />
          </div>
          <div className="col-md-4">
            <CourseCard title="React" />
          </div>
          <div className="col-md-4">
            <CourseCard title="Javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;