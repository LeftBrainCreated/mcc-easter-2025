

interface LocationDetailDivProps {
    name: string | null; 
    positionLeft?: boolean;
}

const descriptions = [
    {
        name: "egghuntField_1",
        description: "This is the first egg hunt field. It is open to all ages!",
    },
    {
        name: "egghuntField_2",
        description: "This is the second egg hunt field. It is open to all ages!",
    },
    {
        name: "egghuntField_3",
        description: "This is the third egg hunt field. It is open to all ages!",
    },
    {
        name: "tent_1",
        description: "This is the first tent. It is open to all ages!",
    },
    {
        name: "informationTent",
        description: "This is the information tent. It is open to all ages!",
    },
]

export default function LocationDetailDiv({ name, positionLeft = false}: LocationDetailDivProps) {
    // name = "Petting Zoo";
    let desc = descriptions.find((desc) => desc.name === name)?.description;
    return (
        <div className={`absolute text-white max-w-3xs text-center ${name == null ? 'h-0 overflow-hidden' : 'h-auto border border-white border-2 p-4 shadow-lg '} bg-[#47bfbb]/80 rounded-2xl ${positionLeft ? 'left-15' : 'right-15'} top-1/4 transform -translate-y-1/2`}>
            <h2 className="text-2xl font-semibold text-center">{name}</h2>
            <br />
            <p className="text-sm font-semibold">{desc}</p>
        </div>
    );
}