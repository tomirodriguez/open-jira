import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';
import { ENTRIES_MOCK } from '../mocks';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2} flexGrow={1}>
        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card
            sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}
          >
            <CardHeader title="Pendientes" />
            <EntryList
              entries={ENTRIES_MOCK.filter(
                (entry) => entry.status === 'pending'
              )}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card sx={{ width: '100%' }}>
            <CardHeader title="En progreso" />
            <EntryList
              entries={ENTRIES_MOCK.filter(
                (entry) => entry.status === 'in-progress'
              )}
            />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems={'stretch'}>
          <Card sx={{ width: '100%' }}>
            <CardHeader title="Completadas" />
            <EntryList
              entries={ENTRIES_MOCK.filter(
                (entry) => entry.status === 'finished'
              )}
            />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
