// CourseBlock.js
import React from 'react';

const CourseBlock = ({ title, description }) => {
    return (
        <div className="course-block">
            <h2>{title}</h2>
            <p>{description}</p>
            <button onClick={() => alert(`Starting course: ${title}`)}>Start Course</button>
        </div>
    );
};

export default CourseBlock;
