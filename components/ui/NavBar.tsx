import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { FC } from 'react';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
type Props = {};

export const NavBar: FC<Props> = ({}) => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" sx={{ color: 'Background' }}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography
          fontSize={25}
          variant="h1"
          color={'Background'}
          fontWeight={400}
        >
          OpenJira
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
