import Typography from '@mui/material/Typography';

function HeroText() {
  return (
    <Typography
      sx={{
        fontFamily: 'Allison',
        fontSize: {
          xs: '3em', // For extra small screens (mobile)
          sm: '4em',
          md: '5em',
        },
        textAlign: 'center',
        margin: {
          xs: '30vh 0',
          md: '35vh 0',
        },
      }}
    >
      Uzleti s nama u svijet balonske mašte
    </Typography>
  );
}

export default HeroText;
