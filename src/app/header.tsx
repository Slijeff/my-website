"use client";
import { IconButton, Stack, Typography, useColorScheme } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import InstagramIcon from "@mui/icons-material/Instagram";
import LightModeIcon from "@mui/icons-material/LightMode";
import TranslateIcon from "@mui/icons-material/Translate";
import { usePathname } from "next/navigation";

interface HeaderLinkProps {
  text: string;
}
function HeaderLink({ text }: HeaderLinkProps) {
  const pathName = usePathname();
  const navigateTo = text === "Home" ? "/" : `/${text.toLowerCase()}`;
  return (
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

export default function Header() {
  const { mode, setMode } = useColorScheme();
  return (
    <Box
      position="sticky"
      height="64px"
      sx={{
        top: 0,
        backdropFilter: "blur(4px)",
        transition: "all 0.5s ease-in-out",
      }}
    >
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
          <Stack width={"100%"} gap={3} direction="row" alignItems="center">
            <HeaderLink text="Home" />
            <HeaderLink text="Blogs" />
            <HeaderLink text="Contact" />
            <HeaderLink text="Collections" />
          </Stack>
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
            <HeaderLinkIcon icon={<GitHubIcon />} />
            <HeaderLinkIcon icon={<LinkedInIcon />} />
            <HeaderLinkIcon icon={<InstagramIcon />} />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
