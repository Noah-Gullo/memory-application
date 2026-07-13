export default function Card({name, image, randomRender}){
    return (
        <div className="card">
            <img src={image} draggable="false" onClick={() => {randomRender(name)}}></img>
            <p>{name}</p>
        </div>
    )
}