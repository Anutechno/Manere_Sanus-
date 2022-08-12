import React, { useState } from "react";
import Navbars from "../../containers/header/Nav/Navbar";
import Footer from "../../containers/footer/Footer";

import "./profile.css";
import { FaPlusCircle } from "react-icons/fa";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const EditProfile = () => {
  const [age, setAge] = useState(null);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div>
        <div>
          <Navbars />
        </div>
        <div className="col-md-7 mx-auto bd">
          <div className="pb-5">
            <div className="ed-pro text-center">
              <img src="profile.png" alt="" />
            </div>
            <span className="ed-span">
              <FaPlusCircle />
            </span>
          </div>
          <div className="text-center col-md-10 mx-auto">
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
                label="First Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </Box>
            <Box sx={{ m: 0.5, minWidth: "34ch" }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
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
                label="Street + No"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Code + Place"
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
                label="Country"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Birthday"
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
                label="Status"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Courses Booked"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Vaccinated"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Corona - Accepted"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="DBS Protokoll"
                variant="outlined"
              />
            </Box>
            <div className="d-flex">
                <img src="./save.png" alt="" className="smimg" />
                <img src="./save.png" alt="" className="smimg"/>
            </div>
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
                label="Reha - VO"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Points"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="E- Status"
                variant="outlined"
              />
              <TextField id="outlined-basic" label="Email" variant="outlined" />
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
                label="Contact"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
              />
            </Box>
          </div>
          <div className="text-center et-bt">
            <button className="pclr">Save Profile</button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
