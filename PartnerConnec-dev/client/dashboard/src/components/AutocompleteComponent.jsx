import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';


export default function AutocompleteComponent({rows, setSearchText}) {
  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={rows}
    sx={{ width: 300 }}
    onChange={(e, v) => setSearchText(v.name)}
    getOptionLabel={(row) => row.name ? row.name : ""}
    renderInput={(params) => (
      <TextField {...params} size="small" label="Search Products"/>
    )}
  />
  )
}
