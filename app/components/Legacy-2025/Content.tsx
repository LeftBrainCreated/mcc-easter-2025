

export default function Content() {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <section className="flex flex-col items-center justify-center w-full max-w-4xl  mb-8">
                <h2 className="font-bold text-4xl text-center mb-8">A Legacy of Faith</h2>
                <h3>Father's Day 2025</h3>
                <iframe className="w-full min-h-2xl max-w-4xl h-150 mb-4 rounded-lg shadow-lg"
                    // width="560" 
                    // height="315" 
                    src="https://www.youtube.com/embed/3fsWaQDga9Q?si=Ow59DYZ1vaGT1Izz" 
                    title="YouTube video player" 
                    frameBorder="2" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </section>

            <section className="mb-8">
                <h3 className="font-bold text-2xl mb-4"><a href="https://www.bible.com/en/reading-plans/57791"><span className="decoration-none">Click Here to join the "Transformed" bible study</span></a></h3>
                <p className="text-lg mb-4">Join us for a special Bible study session focused on the legacy of faith passed down through generations.</p>
            </section>
        </div>
    );
}