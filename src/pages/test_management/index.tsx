import { Box, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { AppButton, Layout } from 'components';
import { useRouter } from 'next/router';
import { ROOT_URL } from 'routes';

function Page() {



  const router = useRouter()
  return (
    <Container>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        borderBottom: '1px solid lightgrey',
        height: "50px"
      }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 10,
          }}
        >
          <Typography variant='body2' sx={{ fontWeight: 600, fontSize: '1.2rem' }}>Remontad</Typography>
        </Box>
        <Typography
          variant='body2'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '40px'
          }}
        >
          <AppButton
            onClick={() => {
              router.push(ROOT_URL)
            }}
            title={'Exit Exam'}
            sx={{ mx: 1, backgroundColor: 'red !important' }}
          />
        </Typography>
      </Box>

    </Container>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'TEST MANAGEMENT'}>{page}</Layout>
);

export default Page;
