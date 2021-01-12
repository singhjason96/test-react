import React, {useState} from 'react';
import { createApi } from 'unsplash-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   sectionFlex: {
       display: 'flex',
       
   },
  }));

const SectionOne = () => {
    const classes = useStyles();
      
      
    return(
        <div className={classes.sectionFlex}>
            <div>Section One</div>
            <div>Section 2s</div>
        </div>
    )
}

export default SectionOne;