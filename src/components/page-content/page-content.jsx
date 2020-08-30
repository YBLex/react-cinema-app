import React from 'react';
import PropTypes from 'prop-types';

const PageContent = ({children}) => {
  return (
    <div className="page-content">
      {children}
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PageContent;
