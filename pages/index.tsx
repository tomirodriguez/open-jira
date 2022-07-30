import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/features';
import { useEntries } from '../hooks/useEntries';

const HomePage: NextPage = () => {
  const { finished, pending, inProgress } = useEntries();

  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2} flexGrow={1}>
        <EntryList
          title="Pending"
          entries={pending}
          status={'pending'}
          showAddEntry
        />
        <EntryList
          title="In Progress"
          entries={inProgress}
          status={'in-progress'}
        />
        <EntryList title="Finished" entries={finished} status="finished" />
      </Grid>
    </Layout>
  );
};

export default HomePage;
