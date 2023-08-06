import { Button, TextField, Stack } from '@mui/material';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SignInFormFieldsType } from '@/types/models/forms';

const schema = yup.object().shape({
  name: yup.string().trim().required('Name is a required field'),
  password: yup.string().trim().required('Password field is required'),
});

type FormInputs = SignInFormFieldsType;

type SignInFormProps = {
  onFormSubmit: (data: SignInFormFieldsType) => void;
};

const SignInForm = ({ onFormSubmit }: SignInFormProps) => {
  const defaultValues: FormInputs = {
    name: '',
    password: '',
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit = (data: FormInputs) => {
    onFormSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Stack spacing={2}>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              placeholder="Type name here..."
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              type="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              placeholder="Type password here..."
              fullWidth
            />
          )}
        />

        <Button variant="contained" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
};

export default SignInForm;
