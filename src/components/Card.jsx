export default function Card({name, image, randomRender}){
    return (
        <div id="card">
            <img src={image} onClick={randomRender}></img>
            <p>{name}</p>
        </div>
    )
}