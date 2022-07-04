import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import dstyles from "./Detail.module.css";
function Detail() {
  const [loading, setLoading] = useState(true); // 로딩화면 만들기
  const [movieDetail, setMovieDetail] = useState([]); // json 정보들을 넣는 값.

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
    <div className={dstyles.movie__Detail__container}>
      {loading ? (
        <div className={dstyles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={dstyles.movie__Detail}>
          <img
            src={movieDetail.medium_cover_image}
            alt={movieDetail.title}
            className={dstyles.movie__Detail__img}
          />
          <img
            src={movieDetail.background_image_original}
            alt={movieDetail.title}
            className={dstyles.movie__Detail__background__img}
          />
          <div className={dstyles.movie__Detail__info}>
            <h2 className={dstyles.title}>{movieDetail.title_long}</h2>
            <h3
              className={dstyles.rating}
            >{`Raiting: ${movieDetail.rating}💛`}</h3>
            <h3
              className={dstyles.runtime}
            >{`Runtime: ${movieDetail.runtime} min🕒`}</h3>
            <ul>
              {movieDetail.genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
            <div className={dstyles.movie__Description}>
              <h3 className={dstyles.description}>Description💬</h3>
              <span>{movieDetail.description_full}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Detail;

// useParam함수는 react router에서 제공하는 함수로 url에 있는 값(특히 변경되는 값)을 반환해주는 함수이다.
