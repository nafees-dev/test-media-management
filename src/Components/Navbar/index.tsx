import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { BackButton, ChangeProfile, SubTitle, Title, Toolbar, UserName } from "./style";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import { Avatar, Grid } from "@mui/material";
import User_img from "../../assets/user_img.png"

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ boxShadow: 'none !important', backgroundColor: 'transparent' }} position="static">
        <Toolbar>
          <Grid container>
            <Grid sx={{ display: "flex" }} item  xs={10} sm={9} lg={10}>
              <BackButton>
                <KeyboardBackspaceIcon />
              </BackButton>
              <Box sx={{ display: "flex", flexDirection: "column", marginTop: "3px" }}>
                <Box display="flex" alignItems="center" gap="8px">
                  <Title>Media Management</Title>
                  <DriveFileRenameOutlineIcon sx={{ fontSize: "1rem", cursor: "pointer" }} />
                </Box>
                <SubTitle>Draft campaign</SubTitle>
              </Box>
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "flex-end", alignItems: 'center', gap: '12px' }} item xs={2} sm={3} lg={2}>
              <Box sx={{ display: {xs: 'none', sm: "flex"}, flexDirection: "column", marginTop: "3px" }}>
                <UserName>Jane Cooper</UserName>
                <ChangeProfile>Change Profile</ChangeProfile>
              </Box>
              <Avatar sx={{ width: '40px', height: '40px', borderRadius: '12px' }} src={User_img} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
