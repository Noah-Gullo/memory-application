export default function Card({name, image, randomRender}){
    return (
        <div className="card">
            <img src={image} onClick={() => {randomRender(name)}}></img>
            <p>{name}</p>
        </div>
    )
}