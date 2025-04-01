

export default function MapLabel({ name, coords}:{
    name: string | null; 
    coords: {x: number, y: number}[]
}) {
    return (
        <div className={`absolute left-${coords[0].x} top-${coords[0].y} z-1`}>
            <span>{name}</span>
        </div>
    );
}