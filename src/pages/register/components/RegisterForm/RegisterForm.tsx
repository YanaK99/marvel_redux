import * as yup from "yup";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import { Controller, useForm } from "react-hook-form";
import { RegisterFormFieldsType } from "@/types/models/forms";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  name: yup.string().trim().required("Name is a required field"),
  password: yup.string().trim().required("Password field is required"),
  confirmPassword: yup
    .string()
    .trim()
    .required("Confirm password field is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  email: yup.string().trim().email().required("Email field is required"),
});

type FormInputs = RegisterFormFieldsType;

type RegisterFormProps = {
  onFormSubmit: (data: RegisterFormFieldsType) => void;
};

const RegisterForm = ({ onFormSubmit }: RegisterFormProps) => {
  const defaultValues: FormInputs = {
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
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
              color="secondary"
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
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              color="secondary"
              {...field}
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              placeholder="Type email here..."
              fullWidth
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <TextField
              color="secondary"
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

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <TextField
              color="secondary"
              {...field}
              label="Confirm password"
              type="password"
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword?.message}
              placeholder="Confirm password here..."
              fullWidth
            />
          )}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            color: "#f2f2f2",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Modern No. 20",
            backgroundColor: "main",
            "&:hover": {
              backgroundColor: "info",
            },
          }}
        >
          Register
        </Button>
      </Stack>
    </form>
  );
};

export default RegisterForm;
