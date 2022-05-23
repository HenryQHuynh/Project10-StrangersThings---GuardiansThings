import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const FrontPage = () => {
  return (
    <React.Fragment>
      <Container maxWidth={false}>
        <Box
          sx={{
            bgcolor: '#F0F9FA',
            height: '762px',
            //height: '81vh', The height and width were adjusted in favor pixels since it fit in my screen really well.
            // width:  '96vw',
            backgroundImage:
              'url(https://asset.vg247.com/destiny-2-guardian-games-best-in-class-podium.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/destiny-2-guardian-games-best-in-class-podium.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Container>
    </React.Fragment>
  );
};

export default FrontPage;
