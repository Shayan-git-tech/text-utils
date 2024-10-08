import React from 'react'
import PropTypes from 'prop-types'
export default function Footer(props){
    return(
        <footer>
        <p>Developed By © {props.name} </p>
      </footer>
    )
}
Footer.propTypes = {
    name: PropTypes.string.isRequired
};
