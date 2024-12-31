"use client";
import { IconButton, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DarkModeIcon from "@mui/icons-material/DarkMode";
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
        color={"grey.600"}
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
}
function HeaderLinkIcon({ icon }: HeaderLinkIconProps) {
  return <IconButton sx={{ padding: 0 }}>{icon}</IconButton>;
}

export default function Header({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <Box position="static" height="64px" sx={{ backdropFilter: "blur(4px)" }}>
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
              <HeaderLinkIcon icon={<DarkModeIcon />} />
              <HeaderLinkIcon icon={<GitHubIcon />} />
              <HeaderLinkIcon icon={<LinkedInIcon />} />
            </Stack>
          </Grid>
        </Grid>
      </Box>
      {children}
    </div>
  );
}
