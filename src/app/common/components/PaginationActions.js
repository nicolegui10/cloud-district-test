import React from 'react';
import { compose } from 'recompose';
import {IconButton, withStyles } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import paginationStyles from './Pagination.styles'


class PaginationActions extends React.Component {
 
  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;
    console.log(Math.ceil(count / rowsPerPage) + 1)
    console.log(page);
    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 1}
          aria-label="Previous Page"
        >
          <KeyboardArrowLeft />
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page === (Math.ceil(count / rowsPerPage))}
          aria-label="Next Page"
        >
           <KeyboardArrowRight />
        </IconButton>
      </div>
    );
  }
}

export default compose(withStyles(paginationStyles, { withTheme: true }))(PaginationActions);
