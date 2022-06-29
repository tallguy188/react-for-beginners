import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dstyles from "./Detail.module.css";
function Detail() {
  const [loading, setLoading] = useState(true); // 로딩화면 만들기
  const [moviedetail, setMovieDetail] = useState([]); // json 정보들을 넣는 값.

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={dstyles.container}>
      {loading ? (
        <div className={dstyles.loader}>Loading...</div>
      ) : (
        <div>
          <h1>{moviedetail.title}</h1>
          <img src={moviedetail.medium_cover_image} alt={moviedetail.title} />
          <p>{moviedetail.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;

// useParam함수는 react router에서 제공하는 함수로 url에 있는 값(특히 변경되는 값)을 반환해주는 함수이다.
