
function GolfClubDetails({details}) {
    console.log('Club details', details)
    
    return(
        <div>
            <h1>WHERE AM I</h1>
        <h1>{details.clubtype}</h1>
        <img src={details.image} />
        <p>Description: {details.description}</p>
        <p>Price: {details.price}</p>
        </div>
    )
}
export default GolfClubDetails;