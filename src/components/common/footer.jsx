import PropTypes from "prop-types";

function Footer({ badges }) {
  return (
    <footer className="py-3 bg-transparent">
      <div className="container text-center">
        <div className="row justify-content-center">
          {badges.map((badge, index) => (
            <div
              id="myBadges"
              key={index}
              className="col-3 col-sm-3 col-md-1 d-flex justify-content-center  mb-3"
            >
              <a href={badge.href} target="_blank" rel="noopener noreferrer">
                <img src={badge.src} alt={badge.alt} className="img-fluid" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;

Footer.propTypes = {
  badges: PropTypes.array.isRequired,
};
