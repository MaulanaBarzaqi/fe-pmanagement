import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

import AuthLayout from '@/components/layouts/AuthLayout';
import Dialog from '@/components/ui/Dialog';
import TextField from '@/components/ui/Forms/TextField';
import services from '@/services';
import session from '@/utils/session';

const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email harus di isi')
    .email('format email tidak valid'),
  password: Yup.string().required('Password harus di isi'),
});

const Login = () => {
  const [loading, setLoading] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const [dialogMessage, setDialogMessage] = useState({
    title: '',
    message: '',
  });

  const [dialogActions, setDialogActions] = useState([]);

  const navigate = useNavigate();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (formValues) => {
    setLoading(true);
    try {
      const response = await services.auth.login(formValues);
      session.setSession(response.data.data);
      navigate('/');
    } catch (error) {
      setOpenDialog(true);
      setDialogMessage({
        title: 'Oops... Terjadi kesalahan',
        message:
          error?.response?.data?.message ?? 'Silahkan coba beberapa saat lagi.',
      });
      setDialogActions([
        {
          label: 'Mengerti',
          onClick() {
            setOpenDialog(false);
          },
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <Paper
        sx={{
          padding: 2,
          width: 500,
        }}
      >
        <Typography
          variant="h5"
          component={'h1'}
          align="center"
          marginBottom={2}
        >
          Masuk
        </Typography>
        <Stack
          flexDirection={'column'}
          gap={1}
          component={'form'}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            id={'email'}
            label={'Email'}
            control={control}
            name={'email'}
          />
          <TextField
            id={'password'}
            label={'Password'}
            control={control}
            name={'password'}
            secureText
          />
          <Button type="submit" variant="contained" loading={loading} fullWidth>
            Masuk ke akun anda
          </Button>
          <Button
            type="button"
            variant="text"
            onClick={() => navigate('/register')}
            fullWidth
          >
            Daftar Baru
          </Button>
        </Stack>
      </Paper>
      <Dialog open={openDialog} action={dialogActions} {...dialogMessage} />
    </AuthLayout>
  );
};

export default Login;
