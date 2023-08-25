import { TextField, TextFieldProps } from '@mui/material';
import { memo } from 'react';

type ExtendedTextFieldProps = TextFieldProps & {
  error?: boolean;
  disabled?: boolean;
};

function InputComponent({
  name,
  error,
  label,
  helperText,
  placeholder,
  margin = 'normal',
  variant = 'outlined',
  disabled,
  ...rest
}: ExtendedTextFieldProps) {
  return (
    <TextField
      fullWidth
      {...{
        error: Boolean(error),
        name,
        label,
        margin,
        variant,
        helperText,
        placeholder,
        disabled,
      }}
      {...rest}
    />
  );
}

export const Input = memo(InputComponent);
