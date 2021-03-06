import { Box } from '@mui/material';
import Head from 'next/head';
import { FC, PropsWithChildren, useState } from 'react';
import { NavBar, SideMenu } from '../ui';

type Props = {
  title?: string;
};

export const Layout: FC<PropsWithChildren<Props>> = ({
  title = 'OpenJira',
  children,
}) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const handleBurguerClick = () => {
    setSideMenuOpen(true);
  };

  const handleSideMenuClose = () => {
    setSideMenuOpen(false);
  };

  return (
    <Box
      sx={{
        flexFlow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Head>
        <title>{title}</title>
      </Head>

      <NavBar onBurguerClick={handleBurguerClick} />
      <SideMenu isOpen={sideMenuOpen} onClose={handleSideMenuClose} />
      <Box
        sx={{
          padding: '10px 20px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
