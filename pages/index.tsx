import { Card, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';
import { useEntries } from '../hooks/useEntries';

const HomePage: NextPage = () => {
  const { finished, pending, inProgress } = useEntries();

  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2} flexGrow={1}>
        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card
            sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardHeader title="Pendientes" />
            <EntryList entries={pending} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card sx={{ width: '100%' }}>
            <CardHeader title="En progreso" />
            <EntryList entries={inProgress} />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card sx={{ width: '100%' }}>
            <CardHeader title="Completadas" />
            <EntryList entries={finished} />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
