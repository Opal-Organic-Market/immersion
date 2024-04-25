import React from 'react';
import { makeStyles, useMediaQuery } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import '../index.css'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  input: {
    width: '70%',
    height: '5%',
    padding: '14px 36px 14px 16px',
    gap: '8px',
    borderRadius: '8px',
    background: '#F6F5F8',
    fontFamily: 'Lato',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '24px',
    textAlign: 'left',
    color: '#CBCBD4',
    display: 'flex',
    alignItems: 'center',
    '& input': {
      outline: 'none',
      border: '0',
      background: 'none',
      '&:focus': {
        outline: 'none',
      },
    },
  },
  icon: {
    marginRight: '4px',
  },
}));

const SearchBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const classes = useStyles({
    inputWidth: isMobile ? '100%' : '342px',
  });

  return (
    <div className={classes.container}>
      <div className={classes.input}>
        <SearchIcon className={classes.icon} />
        <input
          type="text"
          placeholder= 'Cherchez votre commande'
        />
      </div>
    </div>
  );
};

export default SearchBar;
