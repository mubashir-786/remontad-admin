import styled from '@emotion/styled';
import {
  AppBar,
  Box,
  Theme,
  Typography,
} from '@mui/material';
import { memo } from 'react';

type StyleType = { theme: Theme };

const DashboardNavbarRoot = styled(AppBar)(({ theme }: StyleType) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const DashboardNavbarComponent = (props: any) => {
  const {  ...other } = props;
  return (
    <DashboardNavbarRoot
      sx={{
        left: { lg: 280 },
        width: { lg: 'calc(100% - 280px)' },
      }}
      {...other}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4' sx={{ color: 'black' }}>Remontad</Typography>
      </Box>
    </DashboardNavbarRoot>
  );
};

export const DashboardNavbar = memo(DashboardNavbarComponent);
