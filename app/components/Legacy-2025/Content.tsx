import Image from 'next/image';
// import Img1 from '../../../public/legacy/img-1.jpg';
// import Img2 from '../../../public/legacy/img-2.jpg';
// import Img3 from '../../../public/legacy/img-3.jpg';
// import Img4 from '../../../public/legacy/img-4.jpg';

export default function Content() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <img 
                className="w-full max-w-4xl -top-20 md:-top-40 absolute opacity-25 -z-10"
                src="/legacy/legacy-tree.jpg"
            ></img>
            <section className="flex flex-col items-center justify-center w-full max-w-4xl  mb-8">
                <h1 className="font-bold text-6xl mb-8">Legacy of Faith</h1>
                <h3 className="font-bold text-3xl mb-8" >Happy Father's Day MCC!</h3>
                <p className="font-bold text-md max-w-3xl mb-4">This Father's Day, we want to encourage you as the leader of your family. This page will be updated regularly as a resource for you to grow in your faith! Please enjoy this special encouragement from our lead pastor, Josh Poole!</p>
                <iframe className="w-full max-w-120 h-75 mb-4 rounded-lg shadow-lg"
                    // width="560" 
                    // height="315" 
                    src="https://www.youtube.com/embed/IC62VrlGun0?si=GurQAdCJvWTwKDXw" 
                    title="YouTube video player" 
                    frameBorder="2" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </section>

            <section id="study" className="flex flex-col items-center justify-center w-full max-w-4xl  mb-8">
                <h3 className="font-bold text-2xl mb-4"><span className="decoration-none">Bible Reading Plan: Transform</span></h3>
                <p className="text-sm mb-4 max-w-2xl">This six-day study is a practical guide for men to take action and get unstuck. Each day focuses on one of the "Big Four" areas - health, finances, relationships, and spiritual life - equipping you with strength that endures. Are you ready to transform? It won't be easy, but it will be worth it. This devotional is written by Pastor Anthony Fleming, Founder of Transform the Movement.</p>
                <a href="https://www.bible.com/en/reading-plans/57791" className="relative mt-4 inline-flex items-center">
                    <div className="absolute top-[3px] left-0 w-full h-full bg-[#9aa7b2] rounded-full z-0"></div>

                    <div className="relative flex items-center pl-5 pr-12 py-2 bg-[#317882] text-white font-bold rounded-full z-10">
                        Join the Plan!

                        <div className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#9aa7b2] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-xl leading-none">&raquo;</span>
                        </div>
                    </div>
                </a>

                <div className="mt-10 grid w-full lg:w-4xl grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="relative w-full h-56">
                        <Image
                        src="/legacy/img-1.jpg"
                        alt="Transform Plan Image 1"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className="object-cover rounded-lg shadow-lg"
                        priority={false} // or true for above-the-fold images
                        />
                    </div>
                    <div className="relative w-full h-56">
                        <Image
                        src="/legacy/img-2.jpg"
                        alt="Transform Plan Image 2"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="relative w-full h-56">
                        <Image
                        src="/legacy/img-3.jpg"
                        alt="Transform Plan Image 3"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="relative w-full h-56">
                        <Image
                        src="/legacy/img-4.jpg"
                        alt="Transform Plan Image 4"
                        fill
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className="object-cover rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                    
            </section>
        </div>
    );
}