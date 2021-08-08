import React from 'react';

import angular_course from '../img/course_icons/angular.png';
import django_course from '../img/course_icons/django.png';
import java_course from '../img/course_icons/java.png';
import javascript_course from '../img/course_icons/javascript.png';
import php_course from '../img/course_icons/php.png';
import python_course from '../img/course_icons/python.png';
import react_course from '../img/course_icons/react.png';
import webdev_course from '../img/course_icons/webdev.png';

const Courses = () => {
    return (
        <>
            <div id="courses">
                {/* Course heading */}
                {/* <h3 class="course-heading">Browse the best</h3> */}
                <h2 class="course-heading">Premium courses</h2>

                {/* All courses are static we need to make dynamic */}
                <div id="all-course">
                    <div class="course-items">
                        <img src={python_course} alt="Python course" />
                        <p class="course-name">Python</p>
                        <p class="course-count">10 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={django_course} alt="Django course" />
                        <p class="course-name">Django</p>
                        <p class="course-count">5 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={react_course} alt="React course" />
                        <p class="course-name">React</p>
                        <p class="course-count">15 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={java_course} alt="Java course" />
                        <p class="course-name">Java</p>
                        <p class="course-count">20 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={javascript_course} alt="Javascript course" />
                        <p class="course-name">Javascript</p>
                        <p class="course-count">17 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={webdev_course} alt="Web development course" />
                        <p class="course-name">WebDev</p>
                        <p class="course-count">9 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={php_course} alt="PHP course" />
                        <p class="course-name">PHP</p>
                        <p class="course-count">12 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={angular_course} alt="Angular course" />
                        <p class="course-name">Angular</p>
                        <p class="course-count">8 Courses</p>
                    </div>
                    <div class="course-items">
                        <img src={react_course} alt="React Native course" />
                        <p class="course-name">React Native</p>
                        <p class="course-count">20 Courses</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Courses;
