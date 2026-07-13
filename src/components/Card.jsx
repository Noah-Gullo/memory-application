export default function Card({name, image, randomRender}){
    return (
        <>
            <img src={image} onClick={randomRender}></img>
            <p>{name}</p>
        </>
    )
}