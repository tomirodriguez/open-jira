import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';
import { useEntries } from '../hooks/useEntries';

const HomePage: NextPage = () => {
  const { finished, pending, inProgress } = useEntries();

  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2} flexGrow={1}>
        <EntryList title="Pending" entries={pending} />
        <EntryList title="In Progress" entries={inProgress} />
        <EntryList title="Finished" entries={finished} />
      </Grid>
    </Layout>
  );
};

export default HomePage;
