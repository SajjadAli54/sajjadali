import PropTypes from "prop-types";

function Tags({ tags, status, onClick }) {
  return (
    <div className="mb-2 mt-3">
      {tags.map((tag, index) => (
        <span
          key={index}
          className={`badge bg-info text-dark me-2 mb-1 ${
            status && status[index] && "bg-warning"
          }`}
          onClick={() => onClick(tag)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;

Tags.propTypes = {
  tags: PropTypes.array,
  status: PropTypes.array,
  onClick: PropTypes.func,
};
