import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MyMovie({ id, coverIMG, title, summary, genres }) {
  //prop의 이름은 그냥 우리 마음대로 지어도 된다.
  return (
    <div>
      <img src={coverIMG} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

MyMovie.propTypes = {
  id: PropTypes.number.isRequired,
  coverIMG: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MyMovie;

// Link 컴포넌트는 브라우저 새로고침 없이 유저를 다른 페이지로 이동시켜주는 컴포넌트이다.
