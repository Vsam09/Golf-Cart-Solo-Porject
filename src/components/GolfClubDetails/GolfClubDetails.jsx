function GolfClubDetails(golfClubDetails) {

    return(
        <div>
        <h1>{golfClubDetails.clubtype}</h1>
        <img src={golfClubDetails.image} />
        <p>{golfClubDetails.description}</p>
        <p>{golfClubDetails.price}</p>
        </div>
    )
}
export default GolfClubDetails;