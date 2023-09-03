import { Box, Container } from '@mui/material';
import { AppButton, Layout } from 'components';
import { List } from 'components/common/ListComponent';
import { getVendors } from 'config/firebase';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


export default function Page() {
    const router = useRouter();
    // const user = useSelector((state: RootState) => state.user);
    const [vendor, setVendor] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [loading1, set1Loading] = useState(false);
    // const [search, setSearch] = useState('');
    // const [page, setPage] = useState(0);
    useEffect(() => {
        const getData = async () => {
            const res: any = await getVendors()
            setVendor(res)
        }
        getData()
    }, [])
    const COLUMNS = [
        { dataField: 'email', caption: 'Email' },
        { dataField: 'name', caption: 'Name' },
        { dataField: 'phone', caption: 'Phone' },

    ];
    // const customerService = new CustomerService();
    // const query = useQuery(
    //     ['customer', search],
    //     async () =>
    //         search
    //             ? await customerService.SearchCustomer(search, user)
    //             : await customerService.ListCustomer(page, user),
    //     {
    //         retry: 3,
    //         refetchOnWindowFocus: false,
    //         onSuccess(data) {
    //             if (data) {
    //                 setCustomer(data?.data.data);
    //                 setLoading(false);
    //                 set1Loading(false);
    //             }
    //         },
    //         onError(err) {
    //             console.log(err);
    //         },
    //     },
    // );



    // const previous = () => {
    //     set1Loading(true);
    //     setPage(page - 1);
    // };

    // const next = () => {
    //     setLoading(true);
    //     setPage(page + 1);
    // };

    // if (query.isLoading) {
    //   return <AppLoader />
    // }
    // if (query.isLoading) {
    //     return <AppLoader />;
    // }
    return (
        <div>
            <Box>
                <Container maxWidth={false}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 30,
                            marginBottom: 10,
                        }}
                    >
                        <h2 style={{ fontWeight: 700, fontSize: '2rem' }}>
                            Vendor Details
                        </h2>
                        <div>
                            <AppButton
                                sx={{ mx: 3, px: '20px', py: '10px' }}
                                onClick={() => {
                                    router.push('/vendors/add');
                                }}
                                title={'Add Vendor'}
                            />
                        </div>
                    </div>

                    <div
                        style={{ minWidth: '300px', maxWidth: '100%', overflowX: 'auto' }}
                    >
                        <div style={{ minWidth: '1300px', width: '100%' }}>
                            <List
                                columns={COLUMNS}
                                content={vendor}
                                url={'/vendors'}
                                editCol={true}
                            />
                        </div>
                    </div>
                    {/* <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <div>
                            {loading1 ? (
                                <CircularProgress />
                            ) : !query?.data?.data.previous ? null : (
                                <AppButton title="Previous" onClick={previous} />
                            )}
                        </div>
                        <div>
                            {loading ? (
                                <CircularProgress />
                            ) : query?.data?.data.next ? (
                                <AppButton title="Next" onClick={next} />
                            ) : null}
                        </div>
                    </div> */}
                </Container>
            </Box>
        </div>
    );
}
Page.getLayout = (page: JSX.Element) => (
    <Layout heading={'LIST'}>{page}</Layout>
);