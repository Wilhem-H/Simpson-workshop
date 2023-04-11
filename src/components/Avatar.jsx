function Avatar ({image, firstName, lastName}){
    return <figure> 
    <img src= {image} alt="photo simpson"/>
    <figcaption>{firstName +" "+ lastName}</figcaption> 
</figure>
}

export default Avatar