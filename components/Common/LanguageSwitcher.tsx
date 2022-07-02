import React, { FC, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LocalizationContext from '../../context/i18nContext';

const LanguageSwitcher: FC = () => {
  const { t, i18n } = useTranslation()

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value)
  }

    return (
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">LANG</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={i18n.language}
          label="Lang"
          onChange={handleChange}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"id"}>Indonesia</MenuItem>
        </Select>
      </FormControl>
    )
}

export default LanguageSwitcher