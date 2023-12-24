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
import { useLocation, useNavigate } from "react-router-dom";
import { Paper } from "@mui/material";

export default function BottomNavigationComponent() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const location = useLocation();
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

  const getValue = (path) => {
    let item = navItems.find((item) => item.path === `/${path}`);
    if (item) {
      return item.key
    }
  };

  React.useEffect(() => {
    let currentPath = location.pathname.split("/");
    if (currentPath.length === 1) {
      setValue(getValue(currentPath[0]));
    } else {
      setValue(getValue(currentPath[1]));
    }
  }, [location.pathname]);

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
