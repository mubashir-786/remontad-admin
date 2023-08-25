import Box from '@mui/material/Box';
import { AppButton } from 'components';

export default function BoxComponent() {
  return (
    <div style={{ width: '200px' }}>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            my: 3,
            width: '100%',
          },
          display: 'flex',
          // height: "40vh",
          width: '90%',
          flexFlow: 'row wrap',
          justifyContent: 'end',
        }}
        noValidate
        autoComplete="off"
      >
        {/* <Box sx={{ maxWidth: "15rem", marginTop: "4rem" }}>
  </Box> */}
        <AppButton
          fullWidth={false}
          type="submit"
          sx={{ my: 2 }}
          title={'ADD CATEGORIES'}
          // onClick={signIn}
          // disabled={formik.isSubmitting}
        />
      </Box>
    </div>
  );
}
