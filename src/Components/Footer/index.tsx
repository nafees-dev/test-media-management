import { Grid, useMediaQuery, useTheme } from "@mui/material"
import { BackButton, FooterComponent, NextButton, NextButtonText } from "./style"
import next_button_icon from "../../assets/next_button_icon.png"
const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <FooterComponent>
      <Grid container rowGap={2} sx={{ height: '100%' }}>
        <Grid sx={{ display: 'flex', alignItems: 'center' }} item xs={12} sm={6}>
            <BackButton>Back</BackButton>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }} item xs={12} sm={6}>
            <NextButton>
                <NextButtonText>Next</NextButtonText>
                {!isMobile && <img src={next_button_icon} alt="Next Button Icon" />}
            </NextButton>
        </Grid>
      </Grid>
    </FooterComponent>
  )
}

export default Footer
