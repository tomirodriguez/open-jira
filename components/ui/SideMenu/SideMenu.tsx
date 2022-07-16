import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import { MENU_ITEMS } from './constants';
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideMenu: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer anchor="left" open={isOpen} onClose={onClose}>
      <Box sx={{ padding: '5px 10px', width: 260 }}>
        <Typography fontSize={20}>Menu</Typography>
        <List>
          {MENU_ITEMS.map(({ text, icon }) => {
            const Icon = icon;

            return (
              <ListItem button key={text}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
};
