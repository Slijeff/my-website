"use client";
import BookIcon from "@mui/icons-material/Book";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";
import LightModeIcon from "@mui/icons-material/LightMode";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";
import TranslateIcon from "@mui/icons-material/Translate";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
  useColorScheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MenuSections: { title: string; icon: React.ReactNode }[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Blogs",
    icon: <BookIcon />,
  },
  {
    title: "Contact",
    icon: <SendIcon />,
  },
  {
    title: "Collections",
    icon: <BookmarkIcon />,
  },
];

const socialLinks = [
  {
    title: "GitHub",
    icon: <GitHubIcon />,
    link: "https://github.com/Slijeff",
  },
  {
    title: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/tingwai-hui/",
  },
  {
    title: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/jeffreyhui21/",
  },
];

interface HeaderLinkProps {
  text: string;
  setDrawer?: React.Dispatch<React.SetStateAction<boolean>>;
}
function HeaderLink({ text, setDrawer = () => {} }: HeaderLinkProps) {
  const pathName = usePathname();
  const navigateTo = text === "Home" ? "/" : `/${text.toLowerCase()}`;
  return (
    <Box onClick={() => setDrawer && setDrawer(false)}>
      <Link href={navigateTo}>
        <Typography
          variant="h6"
          color={"primary"}
          fontWeight={400}
          sx={{
            ":hover": {
              textDecoration: "underline",
            },
            textDecoration: pathName === navigateTo ? "underline" : "none",
          }}
        >
          {text}
        </Typography>
      </Link>
    </Box>
  );
}

interface HeaderLinkIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
}
function HeaderLinkIcon({ icon, onClick }: HeaderLinkIconProps) {
  return (
    <IconButton onClick={onClick} sx={{ padding: 0 }}>
      {icon}
    </IconButton>
  );
}

function HeaderContent({
  isMobile,
  openDrawer,
  setOpenDrawer,
}: {
  isMobile: boolean;
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { mode, setMode } = useColorScheme();

  return (
    <>
      {isMobile && (
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          anchor="top"
        >
          <List>
            {MenuSections.map(({ title, icon }) => (
              <MobileMenuListItemWrapper key={title} icon={icon}>
                <HeaderLink text={title} setDrawer={setOpenDrawer} />
              </MobileMenuListItemWrapper>
            ))}
          </List>
        </Drawer>
      )}
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: "100%" }}
        padding={2}
        paddingLeft={4}
        paddingRight={4}
      >
        <Grid size={5}>
          {isMobile ? (
            <IconButton sx={{ padding: 0 }} onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack width={"100%"} gap={3} direction="row" alignItems="center">
              {MenuSections.map(({ title }) => (
                <HeaderLink key={title} text={title} />
              ))}
            </Stack>
          )}
        </Grid>
        <Grid size={5}>
          <Stack
            width={"100%"}
            gap={3}
            direction="row-reverse"
            alignItems="center"
          >
            <HeaderLinkIcon
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              icon={mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            />
            <HeaderLinkIcon icon={<TranslateIcon />} />
            {socialLinks.map(({ title, icon, link }) => (
              <HeaderLinkIcon
                key={title}
                icon={icon}
                onClick={() => window.open(link, "_blank")}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box
      position="sticky"
      height="64px"
      sx={{
        top: 0,
        backdropFilter: "blur(4px)",
        zIndex: 999,
      }}
    >
      <HeaderContent
        isMobile={isMobile}
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </Box>
  );
}

function MobileMenuListItemWrapper({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <ListItem>
      <ListItemIcon>{icon}</ListItemIcon>
      {children}
    </ListItem>
  );
}
