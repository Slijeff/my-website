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
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
  useColorScheme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const MenuSections: { title: string; icon: React.ReactNode }[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Contact",
    icon: <SendIcon />,
  },
  {
    title: "Blogs",
    icon: <BookIcon />,
  },

  {
    title: "Archive",
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
}
function HeaderLink({ text }: HeaderLinkProps) {
  const path = usePathname();
  const router = useRouter();
  return (
    <Box onClick={() => router.push(`/${text.toLowerCase()}`)}>
      <Typography
        variant="h6"
        color={"primary"}
        fontWeight={400}
        sx={{
          ":hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
          textDecoration:
            path === `/${text.toLowerCase()}` ? "underline" : "none",
        }}
      >
        {text}
      </Typography>
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

function HeaderContent({ isMobile }: { isMobile: boolean }) {
  const { mode, setMode } = useColorScheme();
  const { openDrawer, setOpenDrawer } = useContext(DrawerContext);
  return (
    <>
      {isMobile && (
        <Drawer
          open={openDrawer}
          onClose={() => setOpenDrawer(false)}
          anchor="top"
        >
          <List
            sx={{
              backgroundColor: "primary.contrastText",
            }}
          >
            {MenuSections.map(({ title, icon }) => (
              <MobileMenuListItem key={title} icon={icon} text={title} />
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

export const DrawerContext = createContext<{
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  openDrawer: false,
  setOpenDrawer: () => {},
});

export const DrawerStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <DrawerContext.Provider value={{ openDrawer, setOpenDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
};

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DrawerStateProvider>
      <Box
        position="sticky"
        height="64px"
        sx={{
          top: 0,
          backdropFilter: "blur(4px)",
          zIndex: 999,
        }}
      >
        <HeaderContent isMobile={isMobile} />
      </Box>
    </DrawerStateProvider>
  );
}

function MobileMenuListItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  const { setOpenDrawer } = useContext(DrawerContext);
  const navigateTo = text === "Home" ? "/" : `/${text.toLowerCase()}`;
  const router = useRouter();
  return (
    <ListItem disablePadding>
      <ListItemButton
        onClick={() => {
          setOpenDrawer(false);
          router.push(navigateTo);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <HeaderLink text={text} />
      </ListItemButton>
    </ListItem>
  );
}
