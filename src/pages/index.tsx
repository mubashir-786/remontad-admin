import DescriptionIcon from '@mui/icons-material/Description';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Box, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Layout } from 'components';
import { DashboardCard } from 'components/common/DashboardCard';
// import HomeBill from 'components/ui/homeBill';
// import HomeInvoice from 'components/ui/homeInvoice';
import { useRouter } from 'next/router';
const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  paddingBottom: 64,
}));

function Page() {
  const router = useRouter()
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
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item lg={4} sm={6} xl={4} xs={12}>
                <DashboardCard
                  title={'Add User'}
                  backgroundColor={'#1CC88A'}
                  buttonClick={() => {
                    router.push('/users/add');
                  }}
                  label="Add Users"
                  borderColor={'#1CC88A'}
                  icon={<SettingsSuggestIcon style={{ fontSize: '45px' }} />}
                />
              </Grid>
              <Grid item lg={4} sm={6} xl={4} xs={12}>
                <DashboardCard
                  title={'Add Invoice'}
                  backgroundColor={'#36B9CC'}
                  buttonClick={() => {
                    router.push('/invoice');
                  }}
                  label="Add Invoice"
                  borderColor={'#36B9CC'}
                  icon={<DescriptionIcon style={{ fontSize: '45px' }} />}
                />
              </Grid>
              <Grid item lg={4} sm={6} xl={4} xs={12}>
                <DashboardCard
                  title={'Add Vendor'}
                  backgroundColor={'#5A5C69'}
                  label="Add Vendor"
                  buttonClick={() => {
                    router.push('/vendors/add');
                  }}
                  borderColor={'#5A5C69'}
                  icon={<NewspaperIcon style={{ fontSize: '45px' }} />}
                />
              </Grid>
              {/* <Grid item lg={4} sm={6} xl={4} xs={12}>
                <DashboardCard
                  title={'TOTAL PRODUCTS'}
                  backgroundColor={'#1CC88A'}
                  borderColor={'#1CC88A'}
                  paraTitle={JSON.stringify(productCount)}
                  icon={<SettingsSuggestIcon style={{ fontSize: '45px' }} />}
                />
              </Grid>
              <Grid item lg={4} sm={6} xl={4} xs={12}>
                <DashboardCard
                  title={'TOTAL CUSTOMERS'}
                  backgroundColor={'#36B9CC'}
                  borderColor={'#36B9CC'}
                  paraTitle={JSON.stringify(customerCount)}
                  icon={<PeopleIcon style={{ fontSize: '45px' }} />}
                />
              </Grid>
              <Grid item lg={4} sm={6} xl={4} xs={12}>
                <DashboardCard
                  title={'TOTAL VENDORS'}
                  backgroundColor={'#5A5C69'}
                  borderColor={'#5A5C69'}
                  paraTitle={JSON.stringify(BillCount)}
                  icon={<PeopleIcon style={{ fontSize: '45px' }} />}
                />
              </Grid> */}
            </Grid>
          </Container>
        </Box>
        .
      </DashboardLayoutRoot>
    </>
  );
}

Page.getLayout = (page: JSX.Element) => (
  <Layout heading={'HOME'}>{page}</Layout>
);

export default Page;
