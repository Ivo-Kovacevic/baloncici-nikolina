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
          sm: '35vh 0',
        },
      }}
    >

      {/*&nbsp; (non breaking space) is used so sentence is split into new line instead of just one word going into new line*/}
      Uzleti s nama u&nbsp;svijet&nbsp;balonske&nbsp;mašte
      
    </Typography>
  );
}

export default HeroText;
