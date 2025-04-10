

interface LocationDetailDivProps {
    name: string | null; 
    positionLeft?: boolean;
}

const descriptions = [
    {
        name: "3rd-5th",
        description: "Join us for an egg hunt at 1:45 pm!",
    },
    {
        name: "4&5's",
        description: "Join us for an egg hunt at 1:15 pm!",
    },
    {
        name: "K-2nd",
        description: "Join us for an egg hunt at 1:30 pm!",
    },
    {
        name: "Mission City Church",
        description: "We are so glad you have chosen to celebrate Easter with us at MCC! We have service every Sunday at 9:00 & 11:00 am. From MC Kids to Youth, to Life Groups and Bible Studies, there is a community here for you and your family! We'd love to see you next week.",
    },
    {
        name: "Connect With Us",
        description: "Want to know more about getting plugged in to MCC? Receive a welcome gift and a free Bible if you need one! We'd love to get to know you!",
    },
    {
        name: "Food Trucks",
        description: "We have four different food truck options for you to enjoy! Gigglewaters (Burgers), Wicked Chops (Chopped Meat & Cheese Sandwiches), Westchase BBQ and Casablanca Fusion (Latin Food)!",
    },
    {
        name: "Games",
        description: "Come enjoy corn hole, mini golf and other fun activities! ",
    },
    {
        name: "Toddler Bounce House",
        description: "Toddlers, come bounce and have a safe, fun time!",
    },
    {
        name: "Hospitality Tent",
        description: "Cool off from the Florida heat in our hospitality tent! Enjoy seating, fans and free water bottles. ",
    },
    {
        name: "Walkers-3yrs",
        description: "Join us for an egg hunt at 1:00 pm!",
    },
    {
        name: "Register & Prizes",
        description: "Be sure to check in at the registration table! If you find a Golden Egg, come here to collect your prize!",
    },
    {
        name: "First aid & Baby Changing",
        description: "If you have a medical need, head to our gym. Parents, we've set up a cool place for you to change your baby and feed them if you need to!",
    },
    {
        name: "Petting Zoo",
        description: "Come pet all sorts of amazing animals! We have goats, chickens, bunnies, horses and even a mini cow! ",
    },
    {
        name: "Restrooms",
        description: "",
    },
    {
        name: "Bounce Houses",
        description: "Be sure to have completed a waiver before participating in the bounce houses! You can do so at the registration table outside of the gym!",
    },
    {
        name: "Parking",
        description: "",
    },
]

export default function LocationDetailDiv({ name, positionLeft = false}: LocationDetailDivProps) {
    // name = "Petting Zoo";
    let desc = descriptions.find((desc) => desc.name === name)?.description;
    return (
        <div className={`absolute text-white max-w-xs text-center ${name == null ? 'h-0 overflow-hidden' : 'h-auto border border-white border-2 p-4 shadow-lg '} bg-[#47bfbb] rounded-2xl ${positionLeft ? 'left-15' : 'right-15'} top-1/4 transform -translate-y-1/2 z-5`}>
            <h2 className="text-xl lg:text-4xl font-semibold text-center">{name}</h2>
            <br />
            <p className="text-sm lg:text-xl font-semibold">{desc}</p>
        </div>
    );
}