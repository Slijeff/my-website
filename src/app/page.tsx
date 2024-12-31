import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import CircleIcon from "@mui/icons-material/Circle";

interface HomePageItemProps {
  title: string;
  children: React.ReactNode;
}
function HomePageItem({ children, title }: HomePageItemProps): React.ReactNode {
  return (
    <Grid gap={{ sm: 2, xs: 1 }} container width={"100%"}>
      <Grid size={{ sm: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
      </Grid>

      <Grid size={{ sm: "grow" }}>{children}</Grid>
    </Grid>
  );
}

interface ExperienceItemProps {
  children: React.ReactNode;
}
function ExperienceItem({ children }: ExperienceItemProps): React.ReactNode {
  return (
    <>
      <ListItem disableGutters disablePadding alignItems="flex-start">
        <ListItemIcon sx={{ fontSize: "6px", minWidth: "16px" }}>
          <CircleIcon fontSize="inherit" />
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2" color="primary.light">
            {children}
          </Typography>
        </ListItemText>
      </ListItem>
    </>
  );
}

interface ExperienceCardProps {
  children: React.ReactNode;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
}
function ExperienceCard({
  children,
  position,
  company,
  startDate,
  endDate,
}: ExperienceCardProps): React.ReactNode {
  return (
    <Card sx={{ width: "100%" }} variant="outlined">
      <CardContent>
        <Stack gap={2}>
          <Stack>
            <Typography variant="body1" sx={{ fontWeight: 500 }}>
              {position}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 300 }}
              color="primary.lighter"
            >
              {company}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: 300 }}
              color="primary.lighter"
            >
              {startDate} - {endDate}
            </Typography>
          </Stack>
          <List disablePadding>{children}</List>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <Stack gap={4} alignItems={"center"}>
      <Image
        style={{
          borderRadius: "10px",
        }}
        src="/avatar.png"
        alt="Avatar"
        width={200}
        height={200}
      />

      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        <Box>Hi, I am Jeffrey Hui</Box>
        <Box>Welcome to my page 👋</Box>
      </Typography>
      <Stack
        direction="column"
        spacing={4}
        width="100%"
        padding={{ xs: 0, sm: 2 }}
      >
        <HomePageItem title="About">
          <Typography
            variant="body1"
            sx={{ fontWeight: 300 }}
            color="primary.light"
          >
            I am a software engineer and a student at the University of
            California, Berkeley. I am passionate about building user-friendly
            and accessible web applications. I am also interested in
            contributing to open-source projects and working on projects that
            align with my personal interests.
          </Typography>
        </HomePageItem>
        <HomePageItem title="Experience">
          <Stack gap={1}>
            <ExperienceCard
              company="Google"
              position="Lead Software Engineer"
              startDate="Dec 2023"
              endDate="Present"
            >
              <ExperienceItem>
                Built and maintained a large-scale web app
              </ExperienceItem>
              <ExperienceItem>
                Maintained and improved the performance of the app by 10x
              </ExperienceItem>
              <ExperienceItem>
                Invented and implemented a new feature that increased user
                engagement by 20%
              </ExperienceItem>
            </ExperienceCard>
            <ExperienceCard
              company="Meta"
              position="Senior Software Engineer"
              startDate="Dec 2010"
              endDate="Nov 2023"
            >
              <ExperienceItem>
                Using Spark and TensorFlow to build a recommendation engine,
                increasing the company&apos;s revenue by 10x
              </ExperienceItem>
              <ExperienceItem>
                Invented the best AI for the humanity
              </ExperienceItem>
            </ExperienceCard>
          </Stack>
        </HomePageItem>
        <HomePageItem title="Education">
          <Stack gap={1}>
            <ExperienceCard
              company="University of Illinois at Urbana-Champaign"
              position="Master of Computer Science"
              startDate="Sep 2023"
              endDate="Dec 2024"
            >
              <ExperienceItem>Teaching Assistant for CS 412</ExperienceItem>
              <ExperienceItem>GPA 3.8/4.0</ExperienceItem>
            </ExperienceCard>
            <ExperienceCard
              company="University of Wisconsin-Madison"
              position="Bachelor of Science"
              startDate="Sep 2020"
              endDate="May 2023"
            >
              <ExperienceItem>Major in Computer Science</ExperienceItem>
              <ExperienceItem>Major in Data Science</ExperienceItem>
              <ExperienceItem>GPA 3.8/4.0</ExperienceItem>
            </ExperienceCard>
          </Stack>
        </HomePageItem>
      </Stack>
    </Stack>
  );
}
