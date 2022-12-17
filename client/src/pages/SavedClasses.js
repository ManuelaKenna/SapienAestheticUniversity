import {useState} = from 'react';
import StudentPage from "./StudentPage";

const SavedClasses =()=>{
    const [classes,title,copy,images,savedClasses,] =useState([
        {title:'Laser Hair Reduction' copy:" If you're unhappy with shaving, tweezing, or waxing to remove unwanted hair and especially if you have sensitive skin laser hair removal may be an option worth considering." id:1},
        {title:'Scars and Stretch Marks' copy:"Fractional laser is designed to treat surgical and acne scars on any area of the body, including the face. It can be safely used on most skin types. During your consultation, we will determine if you are a good candidate for the procedure based on a variety of factors." id:2},
        {title:'Microneeding Facial' copy:"This service is a Treatment Facial PLUS Microneedling to stimulate the top layers of the skin which release of natural growth factors naturally encouraging rebuilding your own collagen and elastin in order to improve fine lines, wrinkles, sagging skin, texture & tone. Multiple treatments and home-care are recommended for optimal results and 3-5 days downtime is typical."id:3
        {title:'Laser Resurfacing' copy:"     Laser resurfacing facial is a revolutionary cosmetic procedure that uses laser beams to improve the look of your skin. This non-surgical treatment works by targeting damaged or wrinkled areas and eliminates dead cells, resulting in a diminished appearance of fine lines, wrinkles, enlarged pores and acne scars. *All new clients must book a consultation prior to making any booking for laser services. " id:5},
    ])
};

return(
    <div className ='savedClasses'>
        <SavedClasses classes ={classes.filter((class) => {
            class.id==='Laser Hair Reduction' title={title}>
            </div>
        }
);

};