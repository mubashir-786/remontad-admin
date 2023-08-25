import { LayoutRoot } from './styled';
import { memo, useState } from 'react';
import { Box } from '@mui/material';
import {
  Sidebar,
  HTMLHeader,
  DashboardNavbar,
  // AppLoader
} from 'components';
type Props = {
  heading?: string;
  children: JSX.Element;
};

const LayoutComponent = (props: Props) => {
  const { heading, children } = props;

  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <HTMLHeader heading={heading} />
      <LayoutRoot>
        <DashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </LayoutRoot>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export const Layout = memo(LayoutComponent);
