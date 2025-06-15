import Image from 'next/image';

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
                <p className="font-bold text-md max-w-3xl mb-4">This Father’s Day, we want to celebrate and encourage you in your role as the spiritual leader of your family. Take a moment to watch this encouragement from our Lead Pastor, Josh Poole.</p>
                <p className="font-bold text-md max-w-3xl mb-4">Afterward, we invite you to dive into a collection of Bible Reading Plans designed to strengthen your faith and equip you to lead with wisdom, love, and purpose.</p>
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

                <h3 className="font-bold mt-20 text-2xl mb-4"><span className="decoration-none">Bible Reading Plan: Imitators of God</span></h3>
                <p className="text-sm mb-4 max-w-2xl">God has called men to more than strength. He has called us to spiritual leadership. As sons, husbands, fathers, and mentors, we are to live our lives in a way that reflects the character of Christ. This 5-day devotional is built around the call found in Scripture to “be imitators of God.” If you want to lead well, it begins with following well. Let us grow as imitators of our perfect Father.</p>
                <a href="https://www.bible.com/en/reading-plans/58101" className="relative mt-4 inline-flex items-center">
                    <div className="absolute top-[3px] left-0 w-full h-full bg-[#9aa7b2] rounded-full z-0"></div>

                    <div className="relative flex items-center pl-5 pr-12 py-2 bg-[#317882] text-white font-bold rounded-full z-10">
                        Join the Plan!

                        <div className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#9aa7b2] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-xl leading-none">&raquo;</span>
                        </div>
                    </div>
                </a>

                <h3 className="font-bold mt-20 text-2xl mb-4"><span className="decoration-none">Bible Reading Plan: Faithful Fatherhood</span></h3>
                <p className="text-sm mb-4 max-w-2xl">EMPCOA, or “Enemy’s Most Probable Course of Action,” is a military intelligence strategy for anticipating and outsmarting the enemy. This principle applies spiritually, as today’s battlefield is marked by fatherlessness, crime, poverty, addiction, and broken lives. As men of God, we face a relentless enemy seeking to destroy our families and pull us from biblical truth. Understanding his tactics is key to standing firm. This devotional series equips fathers with God’s principles for fatherhood and spiritual leadership, helping them defend their families against Satan’s attacks and remain strong in faith.</p>
                <a href="https://www.bible.com/en/reading-plans/56944" className="relative mt-4 inline-flex items-center">
                    <div className="absolute top-[3px] left-0 w-full h-full bg-[#9aa7b2] rounded-full z-0"></div>

                    <div className="relative flex items-center pl-5 pr-12 py-2 bg-[#317882] text-white font-bold rounded-full z-10">
                        Join the Plan!

                        <div className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#9aa7b2] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-xl leading-none">&raquo;</span>
                        </div>
                    </div>
                </a>

                <h3 className="font-bold mt-20 text-2xl mb-4"><span className="decoration-none">Bible Reading Plan: Wisdom for Marriage</span></h3>
                <p className="text-sm mb-4 max-w-2xl">Marriage is one of the most beautiful representations of Christ and His bride. When our hearts are aligned toward Him and loving our spouse well, we are simply more pleasant humans! Wisdom for Marriage is meant to move us from settling for a mediocre love that only loves expecting something in return to an unselfish love that flows from being thoroughly loved by the Lord.</p>
                <a href="https://www.bible.com/en/reading-plans/24075" className="relative mt-4 inline-flex items-center">
                    <div className="absolute top-[3px] left-0 w-full h-full bg-[#9aa7b2] rounded-full z-0"></div>

                    <div className="relative flex items-center pl-5 pr-12 py-2 bg-[#317882] text-white font-bold rounded-full z-10">
                        Join the Plan!

                        <div className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#9aa7b2] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-xl leading-none">&raquo;</span>
                        </div>
                    </div>
                </a>

                <h3 className="font-bold mt-20 text-2xl mb-4"><span className="decoration-none">Bible Reading Plan: In the World/Not of the World</span></h3>
                <p className="text-sm mb-4 max-w-2xl">In this men's devotional, we'll tackle Jesus' famous theme that His followers are to be "in the world" but not "of the world" and look at how we can be more like Christ, who lived this out perfectly.</p>
                <a href="https://www.bible.com/en/reading-plans/48417" className="relative mt-4 inline-flex items-center">
                    <div className="absolute top-[3px] left-0 w-full h-full bg-[#9aa7b2] rounded-full z-0"></div>

                    <div className="relative flex items-center pl-5 pr-12 py-2 bg-[#317882] text-white font-bold rounded-full z-10">
                        Join the Plan!

                        <div className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#9aa7b2] text-white rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-xl leading-none">&raquo;</span>
                        </div>
                    </div>
                </a>

                <h3 className="font-bold mt-20 text-2xl mb-4"><span className="decoration-none">Bible Reading Plan: Getting to Know the Holy Spirit</span></h3>
                <p className="text-sm mb-4 max-w-2xl">This week, we will explore the Holy Spirit, using the Scripture to learn more about who He is and what He does! </p>
                <a href="https://www.bible.com/en/reading-plans/58381" className="relative mt-4 inline-flex items-center">
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