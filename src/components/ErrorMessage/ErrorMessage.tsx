import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

interface ErrorMessageProps {
  error: string;
}

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Stack>
      <Typography>{error}</Typography>
    </Stack>
  );
};

export default ErrorMessage;
