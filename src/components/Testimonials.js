import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  let reviews = props.reviews;


  const [index, setIndex] = useState(0);


       function leftShiftHandler(){
            if(index - 1 < 0){
              setIndex(reviews.length - 1 );
            }

            else{
                 setIndex(index - 1 );
            }
       }

      function rightShiftHandler(){

          if(index+1>=reviews.length){
               setIndex(0);
          }
          else{
            setIndex(index+1);
          }
      }

       function surpriseHandler(){

        let randomIndex =  Math.floor(Math.random() * reviews.length);
                setIndex(randomIndex);
       }
    

    return(
           <div>
              <Card reviews = {reviews[index]}></Card>
{/* Navigation Buttons */}
<div className="flex gap-4 mt-5">
  <button
    onClick={leftShiftHandler}
    aria-label="Previous testimonial"
    className="text-4xl text-violet-600 hover:text-violet-800"
  >
    <FiChevronLeft />
  </button>

  <button
    onClick={rightShiftHandler}
    aria-label="Next testimonial"
    className="text-4xl text-violet-600 hover:text-violet-800"
  >
    <FiChevronRight />
  </button>

  {/* Surprise Button */}
<button
  onClick={surpriseHandler}
  className="bg-violet-500 text-white px-5 py-2 rounded-md mt-4 hover:bg-violet-700 translate-x-56"
>
  Surprise Me
</button>

</div>
</div>
    );
}

export default Testimonials
