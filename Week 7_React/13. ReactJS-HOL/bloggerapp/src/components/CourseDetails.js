import React from 'react';

const courses = [
  { id: 201, name: 'ReactJS', duration: '4 weeks' },
  { id: 202, name: 'NodeJS', duration: '6 weeks' },
  { id: 203, name: 'MongoDB', duration: '3 weeks' },
];

const CourseDetails = () => {
  return (
    <div>
      <h2>🎓 Course Details</h2>
      {courses.map(course => (
        <p key={course.id}>
          {course.name} - Duration: {course.duration}
        </p>
      ))}
    </div>
  );
};

export default CourseDetails;
