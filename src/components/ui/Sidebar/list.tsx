import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import { ROOT_URL } from 'routes';

export const MENU = [
  {
    href: ROOT_URL,
    icon: <SignalCellularAlt2BarIcon />,
    title: 'Home',
  },
  {
    href: '/users',
    icon: <SignalCellularAlt2BarIcon />,
    title: 'Users',
  },
  {
    href: '/payments',
    icon: <SignalCellularAlt2BarIcon />,
    title: 'Payments',
  },
  {
    href: '/invoices',
    icon: <SignalCellularAlt2BarIcon />,
    title: 'Invoices',
  },
];
