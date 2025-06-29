import React from 'react'
import { TextField, InputAdornment  } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <TextField
      placeholder="Search for items..."
      size="small"
      variant="outlined"
      sx={{ width: { xs: 200, sm: 300, md: 400 } }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default Search