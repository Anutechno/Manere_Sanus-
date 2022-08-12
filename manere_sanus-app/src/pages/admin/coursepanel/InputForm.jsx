import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';

const InputForm = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <div className="text-center">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Course Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Course Place"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Course Place"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField id="outlined-basic" label="02:00" variant="outlined" />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Duration" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Day of the Week"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Points of MG"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Points of MG + VO"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Points of  VO"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Points of TL"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Trainer" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Maximum Participants"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "34ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Intensity" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Needed Equipments"
            variant="outlined"
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 0.5, width: "69ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Course Description with Picture"
            variant="outlined"
          >
            <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant="contained" component="label">
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            </Stack>
          </TextField>
        </Box>
      </div>
    </>
  );
};

export default InputForm;
