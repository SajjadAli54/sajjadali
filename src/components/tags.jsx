import PropTypes from "prop-types";

function Tags({ tags }) {
  return (
    <div className="mb-2 mt-3">
      {tags.map((tag, index) => (
        <span key={index} className="badge bg-info text-dark me-2 mb-1">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;

Tags.propTypes = {
  tags: PropTypes.array,
};
