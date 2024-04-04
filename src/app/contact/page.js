'use client';
import { HomeIcon, PhoneIcon } from 'lucide-react';
import { ArrowRightIcon, MailIcon } from "lucide-react";
import Image from 'next/image';

export default function ContactPage() {
    return (
        <section className="mt-10 mx-20">
            <div className='flex gap-x-4'>
                <div>
                    <div className='mb-10 mt-9'>
                        <h2 className="text-5xl font-extrabold font-nunito text-primary pb-2">
                            Hey!
                        </h2>
                        <h1 className="text-7xl font-extrabold font-sans text-gray-700">
                            Meet, Eat &<br></br>
                            &nbsp;&nbsp;Enjoy the <span className='text-8xl'>Taste...</span>
                        </h1>
                        <p className='subtitle max-w-[390px] pt-5 text-gray-400'>
                            Dont hesitate to contact for orderings, booking tables, arranging party halls, and for reviewing purpose. Shoot me a mail...
                        </p>
                    </div>
                    <div className='flex flex-col gap-y-4 xl:gap-y-6 mb-12 xl:mb-24 xl:text-lg text-gray-500 font-sans'>
                        {/* mail */}
                        <div className="flex items-center gap-x-8">
                            <MailIcon size={18} className='text-primary' />
                            <div>blueforestmdu@gmail.com</div>
                        </div>
                        {/* address */}
                        <div className="flex items-center gap-x-8">
                            <HomeIcon size={18} className='text-primary' />
                            <div>Madurai, Tamil Nadu</div>
                        </div>
                        {/* phone */}
                        <div className="flex items-center gap-x-8">
                            <PhoneIcon size={18} className='text-primary' />
                            <div>+91 9677881551</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image src={'/ill2.jpg'} width={650} height={650} className='ml-32' />
                    </div>
                    <div className='mt-12 w-[650px] ml-32'>
                        <form method='POST' action="" className="flex flex-col gap-y-4">
                            {/* input */}
                            <div className="flex items-center">
                                <input name='name' id='name' placeholder='Name' className='w-full border-2 border-primary rounded-full py-2.5 pl-3' />                            </div>
                            {/* input */}
                            <div className="flex items-center">
                                <input name='email' id='email' placeholder='Email' className='w-full border-2 border-primary rounded-full py-2.5 pl-3'/>                            </div>
                            {/* textarea */}
                            <div className="flex items-center">
                                <textarea name='message' placeholder='Drop your message...' className='w-full border-2 border-primary rounded-t-3xl py-7 pl-3 pt-3'/>
                            </div>
                            <button className='flex items-center max-w-[160px] bg-primary text-white rounded-3xl font-sans py-3 font-bold border-2 border-gray-300 hover:scale-105'>
                                Let&apos;s Talk
                                <ArrowRightIcon size={22} />
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
}