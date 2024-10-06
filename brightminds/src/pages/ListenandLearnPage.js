// import React from 'react';

// const ListenandLearnPage = () => {
//     return <h1>Hello, this is the Listen and Learn page!</h1>;
// };

// export default ListenandLearnPage;


// ListenandLearnPage.js
import React from 'react';
import '../css/ListenandLearn.css';
import CourseBlock from '../components/ListeningSkillsset'; // Adjust the path as necessary

const ListenandLearnPage = () => {
    return (
        <div className="listen-and-learn-page">
            <h1>Listen and Learn</h1>
            <div className="courses-container">
                <CourseBlock 
                    title="2 Words" 
                    description="Learn and practice 2-word combinations."
                />
                <CourseBlock 
                    title="4 Words" 
                    description="Learn and practice 4-word phrases."
                />
                <CourseBlock 
                    title="Small Sentences" 
                    description="Explore small sentences for basic comprehension."
                />
                <CourseBlock 
                    title="Small Stories" 
                    description="Engage with short stories to enhance listening skills."
                />
                <CourseBlock 
                    title="Large Stories" 
                    description="Dive into larger stories for advanced understanding."
                />
            </div>
        </div>
    );
};

export default ListenandLearnPage;
