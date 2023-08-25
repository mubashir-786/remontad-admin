import { memo } from 'react';
import { Button, SxProps, Theme } from '@mui/material';

type Props = {
  title?: string;
  children?: JSX.Element;
  startIcon?: JSX.Element;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
  endIcon?: JSX.Element;
  sx?: SxProps<Theme>;
  type?: 'submit' | 'reset' | 'button';
  variant?: 'text' | 'contained' | 'outlined';
  className?: string;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  size?: 'large' | 'medium' | 'small';
};

const AppButtonComponent = ({
  sx,
  title,
  endIcon,
  onClick,
  children,
  className,
  startIcon,
  fullWidth,
  size = 'medium',
  type = 'button',
  variant = 'contained',
  color = 'primary',
}: Props) => {
  return (
    <Button
      {...{
        sx,
        type,
        size,
        color,
        variant,
        endIcon,
        onClick,
        className,
        fullWidth,
        startIcon,
      }}
    >
      {title ?? children}
    </Button>
  );
};

export const AppButton = memo(AppButtonComponent);
