import React from 'react';

const CourseCard = ({ title }) => {
  return (
    <div className="card">
      <img src="path/to/image.jpg" className="card-img-top" alt="Course" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Course description</p>
        <a href="#" className="btn btn-primary">Enroll Now</a>
      </div>
    </div>
  );
};

export default CourseCard;