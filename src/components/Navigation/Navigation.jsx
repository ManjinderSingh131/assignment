import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { routePaths } from "../../route-paths";
import {
  AccountBalanceWallet,
  Home,
  PendingActions,
  TravelExplore,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

export default function BottomNavigationComponent() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const navItems = [
    {
      path: routePaths.HOME,
      icon: <Home />,
      label: "Home",
      key: 0,
    },
    {
      path: routePaths.TRACK,
      icon: <TravelExplore />,
      label: "Track",
      key: 1,
    },
    {
      path: routePaths.ORDERS,
      icon: <PendingActions />,
      label: "Orders",
      key: 2,
    },
    {
      path: routePaths.WALLET,
      icon: <AccountBalanceWallet />,
      label: "Wallet",
      key: 3,
    },
  ];
  return (
    <Box width={"100vw"}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {navItems.map((item) => {
            return (
              <BottomNavigationAction
                label={item.label}
                icon={item.icon}
                sx={{
                  textTransform: "uppercase",
                }}
                key={item.label}
                onClick={() => navigate(item.path)}
              />
            );
          })}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
