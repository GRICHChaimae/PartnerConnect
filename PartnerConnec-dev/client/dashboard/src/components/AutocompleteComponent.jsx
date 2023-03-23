import React from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';


export default function AutocompleteComponent({rows, setSearchText}) {
  const handleChange = (event)=>{
    event?setSearchText(event.name):setSearchText("")
  }
  return (
    <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={rows}
    sx={{ width: 300 }}
    onChange={(e, v) => handleChange(v)}
    getOptionLabel={(row) => row.name ? row.name : ""}
    renderInput={(params) => (
      <TextField {...params} size="small" label="Search Products"/>
    )}
  />
  )
}
