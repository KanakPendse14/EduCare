import React from 'react';
import '../css/ListenandLearn.css';
import CourseBlock from '../components/ListeningSkillsset'; // Adjust the path as necessary

const ListenandLearnPage = () => {
    return (
        <div className="listen-and-learn-page">
            <h1>Listen and Learn</h1>
            <div className="courses-container">
                <CourseBlock 
                    title="Vowels" 
                    description="Let's Learn and practice Vowels."
                    path = "/vowels"
                />
                <CourseBlock 
                    title="3 Letter Words" 
                    description="Learn and practice 3-Letter Words."
                    path= "/threeletterwords"
                />
                <CourseBlock 
                    title="Every Day Phreses" 
                    description="Explore small sentences for basic comprehension."
                    path="/Everydaysentences"
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


// import React from 'react';
// import '../css/ListenandLearn.css';
// import CourseBlock from '../components/ListeningSkillsset'; // Adjust the path as necessary
// import Sidebar from '../components/Sidebar'; // Adjust the path as necessary

// const ListenandLearnPage = () => {
//     // Example student data
//     const studentName = "John Doe"; // Replace with dynamic data as necessary
//     const studentProfilePic = "path/to/profile-pic.jpg"; // Replace with actual profile picture path

//     return (
//         <div className="listen-and-learn-page">
//             <Sidebar studentName={studentName} studentProfilePic={studentProfilePic} />
//             <div className="courses-container">
//                 <h1>Listen and Learn</h1>
//                 <CourseBlock 
//                     title="Vowels" 
//                     description="Let's Learn and practice Vowels."
//                     path="/vowels"
//                 />
//                 <CourseBlock 
//                     title="3 Letter Words" 
//                     description="Learn and practice 3-Letter Words."
//                     path="/threeletterwords"
//                 />
//                 <CourseBlock 
//                     title="Every Day Phrases" 
//                     description="Explore small sentences for basic comprehension."
//                     path="/Everydaysentences"
//                 />
//                 <CourseBlock 
//                     title="Small Stories" 
//                     description="Engage with short stories to enhance listening skills."
//                 />
//                 <CourseBlock 
//                     title="Large Stories" 
//                     description="Dive into larger stories for advanced understanding."
//                 />
//             </div>
//         </div>
//     );
// };

// export default ListenandLearnPage;
