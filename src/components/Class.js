import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShareForwardLine } from 'react-icons/ri';

const Class = ({singleClass}) => {
    const {header, category, description,trainerPicture,trainerName,teacherReviews,classReviews,completedLearners,picture1,picture2,picture3} = singleClass;
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold'>{header}</h1>
            <p className='flex items-center text-gray-500'>
                <span>{category}</span>
                <span className='mx-2'>
                    <AiOutlineQuestionCircle/>
                </span>
            </p>
            <div className='flex items-center'>
                <div className='flex-1 pr-5'>
                    <p className='mb-20'>{description}</p>
                    <div className='flex items-center my-5'>
                        <img className='w-10 h-10 rounded-full mr-2' src={trainerPicture} alt="" />
                        <p className='text-purple-600 font-bold'>{trainerName}</p>
                       
                    </div>
                     <div>
                            <p className='flex items-center'>
                                <p className='flex items-center text-yellow-500'>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                </p>
                                <p className='text-gray-500'>
                                    {teacherReviews} total reviews for this teacher 
                                </p>
                            </p>
                            <p className='flex items-center'>
                                <p className='flex items-center text-yellow-500'>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                </p>
                                <p className='text-gray-500'>
                                    {classReviews} total reviews for class 
                                </p>
                            </p>
                            <p className='my-10'>Complete by {completedLearners} learners</p>
                    </div>
                    <div className='flex items-center'>
                        <button className='bg-purple-600 px-4 py-2 rounded-full text-white'>
                            <div className='flex items-center'>
                                <p>See Class Schedule</p>
                                <p><MdKeyboardArrowRight/></p>
                            </div>
                        </button>
                        <button className='text-purple-600 mx-5'>
                            <div className='flex items-center'>
                                <p><MdFavoriteBorder/></p>
                                <p>Save</p>
                            </div>
                        </button>
                        <button className='text-purple-600 mx-5'>
                            <div className='flex items-center'>
                                <p><RiShareForwardLine/></p>
                                <p>Share</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='flex items-center flex-1'>
                    <div >
                        <img className='h-[475px]' src={picture1} alt="" />
                    </div>
                    <div className='mx-2'>
                        <img className='my-2' src={picture2} alt="" />
                        <img className='my-2' src={picture3} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Class;