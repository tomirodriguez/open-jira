import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NextLink from 'next/link';

type Props = {
  onBurguerClick: () => void;
};

export const NavBar: FC<Props> = ({ onBurguerClick }) => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton
          type="button"
          size="large"
          edge="start"
          sx={{ color: 'Background' }}
          onClick={onBurguerClick}
        >
          <MenuOutlinedIcon />
        </IconButton>
        <NextLink href="/" passHref>
          <Link>
            <Typography
              fontSize={25}
              variant="h1"
              color={'Background'}
              fontWeight={400}
            >
              OpenJira
            </Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  );
};
