import {useParams} from "react-router";
import {useEffect, useState} from "react";

function Detail() {
    // const [movie, setMovie] = useState({})
    const {id} = useParams("id");
    useEffect(()=>{
        getMovie();
    },[])
    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        console.log(json)
    }

    return(
        <h1>Detail</h1>
    )
}
export default Detail;