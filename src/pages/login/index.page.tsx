import { Card, CardContent, Box } from '@mui/material';
import Title from '@/components/Title/Title';
import Input from '@/components/Input/Input';

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 * @param root0.isAuthorized
 */
function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
      }}
    >
      <Card sx={{ width: 400, borderRadius: 6 }}>
        <CardContent
          sx={{
            backgroundColor: 'rgba(189,229,190,0.53)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Title />
          <Input />
        </CardContent>
      </Card>
    </Box>
  );
}

export default LoginPage;
