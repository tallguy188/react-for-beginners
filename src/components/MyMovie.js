import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./MyMovie.module.css";

function MyMovie({ id, coverImg, title, summary, genres, year }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__image} />
      <div className={styles.movie__div}>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MyMovie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MyMovie;

// Link 컴포넌트는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.
