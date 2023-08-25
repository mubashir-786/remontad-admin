import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  Layout
} from 'components';
const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  paddingBottom: 64,
}));

function Page() {
  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Container >
            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Grid item lg={3} sm={6} xl={3} xs={12} >
                {/* <StartExam /> */}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </DashboardLayoutRoot>
    </>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'HOME'}>{page}</Layout>
);

export default Page;
