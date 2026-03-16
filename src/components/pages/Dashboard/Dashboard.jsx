import { colors, Paper, Typography } from '@mui/material';

import SidebarLayout from '../../layouts/SidebarLayout';

const Dashboard = () => {
  return (
    <SidebarLayout pageTitle="Dashboard">
      <Paper
        sx={{
          padding: 2,
          background: colors.lightBlue[100],
        }}
      >
        <Typography>menampilkan dashboard disini</Typography>
      </Paper>
    </SidebarLayout>
  );
};

export default Dashboard;
