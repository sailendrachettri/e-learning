import React from 'react';

import faculty_1 from '../img/teachers/teacher1.png'
import faculty_2 from '../img/teachers/teacher2.png'
import faculty_3 from '../img/teachers/teacher3.png'

const Faculty = () => {
    return (
        <>
            <div id="faculty">
                <h2>Faculty Members</h2>

                <div id="all-members">
                    <div class="faculty-members">
                        <img src={faculty_1} alt="Teacher Faculty" />
                        <p class="teacher-name">Carl Sassenrath</p>
                    </div>
                    <div class="faculty-members">
                        <img src={faculty_2} alt="Teacher Faculty" />
                        <p class="teacher-name">Elizabeth Feinler</p>
                    </div>
                    <div class="faculty-members">
                        <img src={faculty_3} alt="Teacher Faculty" />
                        <p class="teacher-name">Radia Joy</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Faculty;
