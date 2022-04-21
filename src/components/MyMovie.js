import PropTypes from "prop-types";

function MyMovie({ coverIMG, title, summary, genres }) {
  //prop의 이름은 그냥 우리 마음대로 지어도 된다.
  return (
    <div>
      <img src={coverIMG} alt={title} />
      <h2>{title}</h2>
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
  coverIMG: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MyMovie;
