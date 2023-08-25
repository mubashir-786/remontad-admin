/* eslint-disable react/jsx-key */
import LogoutIcon from '@mui/icons-material/Logout';
import { Box, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import { AppButton } from 'components/common/Button';
import { useRouter } from 'next/router';
import { memo, useEffect } from 'react';
import { theme } from 'theme';
import CustomizedAccordions from '../sidebarbutton';
import { MENU } from './list';

type Props = {
  onClose?: () => void;
  open?: boolean;
};

const SidebarComponent = (props: Props) => {
  const router = useRouter();
  const { open, onClose } = props;

  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false,
  });

  useEffect(() => {
    if (!router.isReady) return;

    if (open) {
      onClose?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div>
        <Box sx={{ p: 2 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              px: 3,
              py: '11px',
              borderRadius: 1,
            }}
          >
            <div>
              <Typography color="inherit" variant="subtitle1">
                Remontad
              </Typography>
            </div>
          </Box>
          <Divider
            sx={{
              borderColor: '#2D3748',
              py: 1,
            }}
          />
        </Box>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        {MENU.map((item, i) => (
          <CustomizedAccordions row={item} key={i} />
        ))}
      </Box>

      <Box
        sx={{
          px: 2,
          py: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            mt: 2,
            mx: 'auto',
            width: '160px',
            '& img': {
              width: '100%',
            },
          }}
        ></Box>
        <AppButton
          fullWidth
          color="error"
          sx={{ mt: 2 }}
          endIcon={<LogoutIcon />}
          onClick={() => {
            router.push('/login');
          }}
          title={'SIGN OUT'}
        />
      </Box>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.divider,
            color: '#FFFFFF',
            width: 280,
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.divider,
          color: '#FFFFFF',
          width: 280,
        },
      }}
      sx={{ zIndex: theme => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

export const Sidebar = memo(SidebarComponent);
