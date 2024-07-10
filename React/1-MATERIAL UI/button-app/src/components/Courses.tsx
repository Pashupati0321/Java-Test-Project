import React, { useState, useEffect } from 'react';
import Course from './Course';


function AllCourse () {
    const [courses, setCourses] = useState([
        { name: "Angular", desc: 'angular learning'},
        { name: "DJango", desc: 'DJango learning'},
        { name: "React", desc: 'React learning'}
]);

useEffect(() => {
    document.title="All courses || Prashant Learning";
   }, []);
   
  return (
    <div>
        <hr/>
        <h1>All Courses</h1>
        <p>List of courses are as follows:</p>
        {
            courses.length>0 
            ? courses.map((item) => <Course key={item.name} course={item} />)
 
            : "No course" }
        
    </div>
    
  )
}

export default AllCourse
