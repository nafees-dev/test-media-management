import { Box, Toolbar as MuiToolbar, Typography, styled } from "@mui/material";

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  backgroundColor: '#09090D',
  boxShadow: 'none',
  borderBottom: '1px solid #3A3940',
  height: '6.9rem',
  paddingInline: '2rem',
  [theme.breakpoints.down('sm')]: {
    boxShadow: 'none',
    backgroundColor: '#12111A',
    borderBottom: 'none',
    paddingInline: '1rem',
  }
  // display: 'flex',
  // alignItems: 'center',
}));

export const BackButton = styled(Box)(() => ({
  height: '2.9rem',
  width: '2.9rem',
  backgroundColor: '#3A39404D',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px',
  cursor: 'pointer',
}));

export const Title = styled(Typography)(() => ({
  marginLeft: '1rem',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.5rem',
}));

export const SubTitle = styled(Typography)(() => ({
  marginLeft: '1rem',
  fontWeight: '400',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#D0CFD1'
}));

export const UserName = styled(Typography)(() => ({
  marginLeft: '1rem',
  fontWeight: '500',
  fontSize: '1rem',
  lineHeight: '1.5rem',
}));

export const ChangeProfile = styled(Typography)(() => ({
  marginLeft: '1rem',
  fontWeight: '300',
  fontSize: '1rem',
  lineHeight: '1.5rem',
  color: '#FF7DFF',
  textDecoration: 'underline',
}));