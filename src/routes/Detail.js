import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCallback } from "react";
function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return <h1>Detail</h1>;
}

export default Detail;

// useParam함수는 react router에서 제공하는 함수로 url에 있는 값(특히 변경되는 값)을 반환해주는 함수이다.
