import { Link } from "@mui/material";
import React, { useState } from "react";

interface LinkButtonProps {
  label?: string;
  href?: string;
  onClick?: (e: any) => any;
  className?: string;
}

const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link
      component="button"
      underline="none"
      variant="body2"
      sx={(theme) => ({
        fontWeight: 500,
        color: theme.palette.grey[700],
        px: theme.spacing(1.5),
        py: theme.spacing(1),
        "&.selected": {
          bgcolor: theme.palette.grey[100],
          borderRadius: theme.shape.borderRadius,
          color: theme.palette.grey[900],
        },
      })}
      {...props}
    >
      {props.label}
    </Link>
  );
};

const NavLinks = () => {
  const [isHomeViewActive, setIsHomeViewActive] = useState(true);
  const [isAboutViewActive, setIsAboutViewActive] = useState(false);
  const handleOnClick = (e) => {
    if (e.target.innerText === "Home") {
      setIsHomeViewActive(true);
      setIsAboutViewActive(false);
    } else {
      setIsHomeViewActive(false);
      setIsAboutViewActive(true);
    }
  };

  return (
    <>
      <LinkButton
        className={isHomeViewActive ? "selected" : ""}
        label="Home"
        href="/#"
        onClick={handleOnClick}
      />
      <LinkButton
        className={isAboutViewActive ? "selected" : ""}
        label="About"
        href="/"
        onClick={handleOnClick}
      />
    </>
  );
};

export default NavLinks;
