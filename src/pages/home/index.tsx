import {
  Container,
  Box,
  Button,
  styled,
  Pagination,
  OutlinedInput,
  Tabs,
  Tab,
} from "@mui/material";
import { FC, useState } from "react";
import GotchaLogo from "../../components/gotcha-logo";
import LoginRegister from "../../components/login-register/login-register";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import Search from "@mui/icons-material/Search";
import GenericList from "../../components/gerenic-list";
import { Link, useLocation, matchPath, Outlet } from "react-router-dom";
import * as React from "react";

const SearchButton = styled(Button)(({}) => ({
  borderRadius: "20px",
  padding: "7px 22px",
  alignSelf: "baseline",
  jusfifySelf: "baseline",
}));

const ListTitle = styled("h1")(() => ({
  alignSelf: "start",
  margin: "10px 0 0 0",
}));

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  // You need to provide the routes in descendant order.
  // This means that if you have nested routes like:
  // users, users/new, users/edit.
  // Then the order should be ['users/add', 'users/edit', 'users'].
  const routeMatch = useRouteMatch([
    "/home/searching",
    "/home/last-posts",
    "/home/new-complaint",
    "/home/top-complaints",
  ]);
  const currentTab = routeMatch?.pattern?.path;

  return (
    <Tabs value={currentTab}>
      <Tab
        icon={<QueryBuilderIcon />}
        iconPosition="start"
        label="Search"
        value="/home/searching"
        to="/home/searching"
        component={Link}
      />
      <Tab
        icon={<Search />}
        iconPosition="start"
        label="Last posts"
        value="/home/last-posts"
        to="/home/last-posts"
        component={Link}
      />
      <Tab
        icon={<AddCircleIcon />}
        iconPosition="start"
        label="New complaint"
        value="/home/new-complaint"
        to="/home/new-complaint"
        component={Link}
      />
      <Tab
        icon={<TrendingUpIcon />}
        iconPosition="start"
        label="Top complaints"
        value="/home/top-complaints"
        to="/home/top-complaints"
        component={Link}
      />
    </Tabs>
  );
}

const Home: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const match = useRouteMatch(["/home"]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <GotchaLogo />
        <LoginRegister isLoggedin={true} />
      </Box>
      <Box
        sx={{
          alignSelf: "start",
          marginTop: "30px",
          width: "100%",
        }}
      >
        <MyTabs />
      </Box>
      <Outlet />
    </Container>
  );
};

export default Home;
