import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2} flexGrow={1}>
        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card sx={{ width: '100%' }}>
            <CardHeader title="Pendientes" />
            <CardContent></CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card sx={{ width: '100%' }}>
            <CardHeader title="En progreso" />
            <CardContent></CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card sx={{ width: '100%' }}>
            <CardHeader title="Completadas" />
            <CardContent></CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
