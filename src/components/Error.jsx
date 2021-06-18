import PropTypes from "prop-types";

const Error = ({mensaje}) => {
    return (
        <p className="red darken-4 error">{mensaje}</p>
    );
};


Error.propTypes = {
    mensaje: PropTypes.element.isRequired
}

export default Error;