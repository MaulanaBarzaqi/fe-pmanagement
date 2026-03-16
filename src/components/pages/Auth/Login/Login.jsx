import { Paper, Stack } from '@mui/material';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';

import DatePicker from '@/components/ui/Forms/DatePicker';
import Select from '@/components/ui/Forms/Select';
import TextField from '@/components/ui/Forms/TextField';

const Login = () => {
  const { control, watch } = useForm({
    defaultValues: {
      filterDate: dayjs(),
    },
  });

  const username = watch('username');

  const category = watch('category');

  const filterDate = watch('filterDate');

  console.log('username:', username);
  console.log('category:', category);
  console.log('filterDate:', filterDate);

  return (
    <Stack
      spacing={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100vh'}
    >
      <Paper
        sx={{
          width: 600,
          padding: 2,
        }}
      >
        <DatePicker
          name="filterDate"
          control={control}
          label={'pilih tanggal'}
        />
        <TextField name={'username'} control={control} label={'Username'} />
        <Select
          name={'category'}
          control={control}
          label={'pilih kategori'}
          options={[
            {
              value: 'kategori 1',
              label: 'kategori 1',
            },
            {
              value: 'kategori 2',
              label: 'kategori 2',
            },
            {
              value: 'kategori 3',
              label: 'kategori 3',
            },
            {
              value: 'kategori 4',
              label: 'kategori 4',
            },
          ]}
        />
      </Paper>
    </Stack>
  );
};

export default Login;
