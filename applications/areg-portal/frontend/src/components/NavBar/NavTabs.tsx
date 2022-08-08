import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      sx={(theme) => ({
        "&.Mui-selected": {
          color: theme.palette.grey[900],
          bgcolor: theme.palette.grey[100],
          borderRadius: theme.shape.borderRadius,
        },
        "&.MuiButtonBase-root": {
          minHeight: theme.spacing(5),
        },
      })}
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      sx={{
        display: "flex",
        alignItems: "center",
        "& .MuiTabs-indicator": {
          display: "none",
        },
      }}
      value={value}
      onChange={handleChange}
      aria-label="nav tabs example"
    >
      <LinkTab label="Home" href="" />
      <LinkTab label="About" href="" />
    </Tabs>
  );
}
