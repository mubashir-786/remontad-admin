import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Card, CardContent, CardHeader, Divider, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
    AppButton,
    Input,
    Layout
} from 'components';
import { addVendor } from 'config/firebase';
import { useFormik } from 'formik';
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
    const formik = useFormik<any>({
        initialValues: {
            email: '',
            name: '',
            phone: '',
        },
        // validationSchema: PRODUCT_FORM_SCHEMA(),
        onSubmit: async values => {
            const body = {

                email: values.email,
                name: values.name,
                phone: values.phone

            }

            await addVendor(body)
            formik.setFieldValue('email', '');
            formik.setFieldValue('name', '');
            formik.setFieldValue('phone', null);

        },
    });
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
                    <form
                        onSubmit={formik.handleSubmit}
                        style={{ width: '100%', margin: '0rem 1rem' }}
                    >
                        <Card>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <KeyboardBackspaceIcon
                                        style={{
                                            fontSize: '40px',
                                            cursor: 'pointer',
                                            marginLeft: '20px',
                                        }}
                                        onClick={() => {
                                            router.push('/vendors');
                                        }}
                                    />
                                    <CardHeader title={'Add Vendor'} />
                                </div>
                                {/* {loading ? (
                                    <CircularProgress style={{ marginRight: '30px' }} />
                                ) : ( */}
                                <AppButton
                                    sx={{ mx: 1, width: '60px', height: '40px', marginRight: '26px' }}
                                    type="submit"
                                    title={'SAVE'}
                                />
                                {/* )} */}
                            </div>
                            <Divider style={{ borderColor: '#E6E8F0' }} />
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item md={6} xs={12}>
                                        <Input
                                            name="email"
                                            type='email'
                                            label={'Email'}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            // helperText={formik.touched.name && formik.errors.name}
                                            error={Boolean(formik.touched.email && formik.errors.email)}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Input
                                            name="name"
                                            label={'Name'}
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            // helperText={formik.touched.first_name && formik.errors.first_name}
                                            error={Boolean(formik.touched.name && formik.errors.name)}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <Input
                                            name="phone"
                                            label={'Phone'}
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            // helperText={formik.touched.phone && formik.errors.phone}
                                            error={Boolean(formik.touched.phone && formik.errors.phone)}
                                        />
                                    </Grid>
                                </Grid>

                            </CardContent>
                        </Card>
                    </form>
                </Box>
            </DashboardLayoutRoot>
        </>
    );
}

Page.getLayout = (page: JSX.Element) => (
    <Layout heading={'ADD USER'}>{page}</Layout>
);

export default Page;
