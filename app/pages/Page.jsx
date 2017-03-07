import React, { PropTypes }   from 'react';
import Grid                   from 'react-bootstrap/lib/Grid';
import Helmet                 from 'react-helmet';

import '../css/bootstrap.css';

const Page = ({ title, link, meta, children }) => {
  return (
    <Grid>
      <Helmet title={title} link={link} meta={meta} />
      { children }
    </Grid>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  link: PropTypes.array,
  meta: PropTypes.array
};

export default Page;

