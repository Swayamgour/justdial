import { WeddingService, WeddingPlanning, PreWeddingPlanning } from '@/data/data'
import Image from 'next/image'
import React from 'react'
import RoundCardDegine from '../components/RoundCardDegine'
import WeddingPlannings from '../components/WeddingPlannings'
import PreWedding from '../components/PreWedding'

function page() {
    return (
        <>
            <RoundCardDegine WeddingService={WeddingService} heading={'Wedding Service Page'} />
            <WeddingPlannings WeddingService={WeddingPlanning} heading={'Wedding Plannings for Bride'} banner={'/weeding/banner.png'} />
            <div className=" lg:mx-12">
                <Image
                    src="/weeding/banner2.webp"
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-lg w-full h-auto object-contain"
                />
            </div>

            <div className='lg:mt-12 mt-6'>
                <WeddingPlannings WeddingService={WeddingPlanning} heading={'Wedding Plannings for Groom'} banner={'/weeding/banner3.png'} />
            </div>

            <PreWedding WeddingService={PreWeddingPlanning} heading={'Pre-Wedding Planning '} image={'/weeding/bg1.jpg'} />

            <div className=" lg:mx-12 lg:my-12">
                <Image
                    src="/weeding/baneer3.webp"
                    alt="ad"
                    width={1200}
                    height={600}
                    className="rounded-lg w-full h-auto object-contain"
                />
            </div>


            <PreWedding WeddingService={PreWeddingPlanning} heading={'For your Big day '} image={'/weeding/bg2.jpg'} />


            <div className="">

                <div className="my-12 ">
                    <div className="flex mx-auto lg:mx-12  gap-5">
                        {/* Left Image */}
                        <div className="w-1/2">
                            <Image
                                src="/weeding/explore.webp"
                                alt="Left Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="w-1/2">
                            <Image
                                src="/weeding/explore2.avif"
                                alt="Right Image"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default page