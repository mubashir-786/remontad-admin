import { Box, Grid, Typography } from '@mui/material';
import { Input } from 'components';
import { AppButton } from 'components/common/Button';
import { Card } from 'components/common/Card';
import { useRouter } from 'next/router';
import { memo } from 'react';
import { ROOT_URL } from 'routes';
import { theme } from 'theme';


const AuthLoginFormComponent = () => {
  const router = useRouter()
  const handleLogin = (e: any) => {
    e.preventDefault();
    router.push(ROOT_URL)
  }
  // const formik = useFormik<IAuthLoginForm>({
  //   initialValues: {
  //     email: '',
  //     password: '',
  //   },
  //   validationSchema: LOGIN_FORM_SCHEMA(),
  //   onSubmit: (values: IAuthLoginForm) => {
  //     handleLogin(values);
  //   },
  // });

  // if (formik.isSubmitting) {
  //   return <AppLoader />;
  // }
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <Typography variant='h2'>Remontad</Typography>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
        <Grid container justifyContent="space-around">
          <Grid item xs={11} md={4}>
            <Card
              elevation={13}
              sx={{ p: 2, background: theme.palette.background.paper }}
            >
              <Box sx={{ my: 3, textAlign: 'center' }}>
                <Typography color="textPrimary" variant="h4">
                  {'SIGN IN'}
                </Typography>
              </Box>
              <form onSubmit={handleLogin}>
                <Input name="email" type="email" label={'EMAIL'} />
                <Input name="password" type="password" label={'PASSWORD'} />
                <AppButton
                  fullWidth
                  type="submit"
                  sx={{
                    my: 2,
                    //   backgroundColor: '#663918',
                    //   '&:hover': {
                    //     backgroundColor: '#ab6c43',
                    //   },
                  }}
                  title={'SUBMIT'}
                />
              </form>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export const AuthLoginForm = memo(AuthLoginFormComponent);
