"use client";
import { CardsProps } from '@/types/interfaces';
import { useState } from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import Modal from './Modal';

const Cards = ({ available, consultation, free, languages, name, reviews, email, latestCaseType, about }: CardsProps) => {
    const [show, setshow] = useState(false);
    return (
        <div>
            {show &&
                <Modal
                    latestCaseType={latestCaseType}
                    setshow={setshow}
                    name={name}
                    about={about}
                    email={email}
                />
            }
            <div className="flex w-full bg-white flex-col rounded-md border md:flex-row">
                <div className="h-full w-full flex items-center ml-5 md:h-[200px] md:w-[300px]">
                    <img
                        src="https://github.com/tekdi/searchwidget-angular/assets/86917304/26e9bc94-b079-4f9d-ad11-78acddc84103"
                        alt="Laptop"
                        className="h-[90%] w-[90%] rounded-md object-cover"
                    />
                </div>
                <div className='flex justify-between w-full'>
                    <div className='mt-3 flex flex-col gap-y-4'>
                        <div>
                            <h1 className="inline-flex text-black items-center text-lg font-semibold">
                                {name} <BsArrowUpRight className="ml-2 h-4 w-4" />
                            </h1>
                            <p className="font-semibold text-sm text-gray-600">
                                Education Qualifications
                                <span className={`ml-3 text-black ${reviews < 4 ? 'text-red-500' : 'text-green-500'}`}>{reviews} ✰</span>
                            </p>
                        </div>
                        <div className="">
                            <div className='text-black font-bold'>
                                Languages Known
                            </div>
                            <div className='text-black font-semibold'>
                                {languages.map((item: string, idx: number) => (
                                    <span key={idx + 1}>{item} </span>
                                ))}
                            </div>
                        </div>
                        <div className="">
                            <div className='text-black font-bold'>
                                Next Available At
                            </div>
                            <div className='text-black font-semibold'>
                                {available}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col p-4'>
                        {free ? <div className='text-green-500 text-3xl font-bold'>Free</div> : (
                            <div>
                                <div className='text-black font-semibold'>Consultation Fee</div>
                                <div className='text-black text-3xl font-bold'> {consultation}/-</div>
                            </div>
                        )
                        }
                        <div className='flex flex-col gap-y-3 mt-6'>
                            <div>
                                <button
                                    type="button"
                                    className="rounded-full bg-gray-300 px-3 py-2 lg:px-[3.8rem] text-sm font-semibold text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    onClick={() => setshow(true)}
                                >
                                    View Profile
                                </button>
                            </div>
                            <div>
                                <button
                                    type="button"
                                    className="rounded-full bg-black px-3 py-2 lg:px-10 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    Book Appointment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
