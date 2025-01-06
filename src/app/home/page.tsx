import AnimateOnScreenSlideIn from '@/customization/animateOnScreenSlideIn';
import AnimateTextFadeIn from '@/customization/animateTextFadeIn';
import CircleIcon from '@mui/icons-material/Circle';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import HomeAvatar from './_client/homeAvatar';
import ActionableExperienceCard from './_client/experienceCard';

interface HomePageItemProps {
  title: string;
  children: React.ReactNode;
}
function HomePageItem({ children, title }: HomePageItemProps): React.ReactNode {
  return (
    <Grid gap={{ sm: 2, xs: 1 }} container width={'100%'}>
      <Grid size={{ sm: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
      </Grid>

      <Grid size={{ sm: 'grow' }} width={'100%'}>
        {children}
      </Grid>
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
        <ListItemIcon sx={{ fontSize: '6px', minWidth: '16px' }}>
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
  title: string;
  subtitle?: string;
  startDate: string;
  endDate?: string;
  clickable?: boolean;
}

function ExperienceCard({
  children,
  title,
  subtitle,
  startDate,
  endDate,
  clickable = false,
}: ExperienceCardProps): React.ReactNode {
  const content = (
    <CardContent>
      <Stack gap={2}>
        <Stack gap={0}>
          <Typography variant="body1" fontWeight="medium">
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="body2"
              fontWeight="light"
              color="primary.lighter"
              fontStyle="italic"
            >
              {subtitle}
            </Typography>
          )}
          <Typography
            variant="body2"
            fontWeight="light"
            color="primary.lighter"
          >
            {startDate} {endDate && `- ${endDate}`}
          </Typography>
        </Stack>
        <List disablePadding>{children}</List>
      </Stack>
    </CardContent>
  );
  return (
    <Card
      component={AnimateOnScreenSlideIn}
      whileHover={{ scale: clickable ? 1.05 : undefined }}
      sx={{
        minWidth: '100%',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(2px)',
      }}
      variant={clickable ? 'elevation' : 'outlined'}
      elevation={clickable ? 2 : undefined}
    >
      {clickable ? <CardActionArea>{content}</CardActionArea> : content}
    </Card>
  );
}

function SkillsChip({ label }: { label: string }) {
  return (
    <Chip variant="outlined" sx={{ width: 'fit-content' }} label={label} />
  );
}

function SkillsItemLine({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Grid container spacing={1} direction={{ xs: 'column', sm: 'row' }}>
      <Grid size={{ xs: 12, sm: 4 }}>
        <Typography
          variant="body1"
          color="primary.light"
          sx={{ fontWeight: 500 }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid size={{ xs: 12, sm: 8 }}>
        <Stack gap={1} direction={'row'} flexWrap={'wrap'}>
          {children}
        </Stack>
      </Grid>
    </Grid>
  );
}

export default function Home() {
  return (
    <Stack gap={4} alignItems={'center'}>
      <HomeAvatar />
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <Stack>
          <Box>
            <AnimateTextFadeIn>👋 I am Jeffrey Hui</AnimateTextFadeIn>
          </Box>
          <Box>
            <AnimateTextFadeIn additionalDelay={0.5}>
              Welcome to my page
            </AnimateTextFadeIn>
          </Box>
        </Stack>
      </Typography>
      <Stack
        direction="column"
        spacing={6}
        width="100%"
        padding={{ xs: 0, sm: 2 }}
      >
        <HomePageItem title="About">
          <Typography
            variant="body1"
            fontWeight="regular"
            color="primary.light"
          >
            <AnimateTextFadeIn>
              I am currently a software engineer at Geico. I am passionate about
              building user-friendly and accessible web applications. I am also
              interested in contributing to open-source projects and working on
              projects that align with my personal interests.
            </AnimateTextFadeIn>
          </Typography>
        </HomePageItem>
        <HomePageItem title="Experience">
          <Stack gap={1}>
            <ExperienceCard
              subtitle="Bowtie Life Insurance Company Limited"
              title="Software Engineer Intern"
              startDate="May 2024"
              endDate="Aug 2024"
            >
              <ExperienceItem>
                Tested the payout method component using Jest and React Testing
                Library that increased the Codecov coverage by 0.23%
              </ExperienceItem>
              <ExperienceItem>
                Added scroll buttons to easily discover overflown tabs by
                modifying MUI styles, addressing 3 customer complains.
              </ExperienceItem>
              <ExperienceItem>
                Coded a CRUD page for administrators to manage surgical
                operations using GraphQL and the Apollo Client.
              </ExperienceItem>
            </ExperienceCard>
            <ExperienceCard
              subtitle="Intellifusion Technologies"
              title="Machine Learning Intern"
              startDate="June 2023"
              endDate="Aug 2023"
            >
              <ExperienceItem>
                Fine-tuned a Stable Diffusion model that assists the local
                Police Department in identifying potential suspects by
                generating photorealistic faces according to witness
                descriptions of the suspect&apos;s facial features.
              </ExperienceItem>
              <ExperienceItem>
                Optimized vector attributes data storing scheme achieved a 99.7%
                reduction in storing vectors and 85.6% in reading.
              </ExperienceItem>
              <ExperienceItem>
                Created a user interface for the Stable Diffusion model using
                the Huggingface Gradio framework.
              </ExperienceItem>
            </ExperienceCard>
            <ExperienceCard
              subtitle="Loovee Science & Technology Development Co., Ltd."
              title="Software Engineer Intern"
              startDate="June 2021"
              endDate="Aug 2021"
            >
              <ExperienceItem>
                Implemented a responsive SPA with React and Ant Design for a
                shopping module that has 400+ daily downloads on IOS.
              </ExperienceItem>
              <ExperienceItem>
                Created mobile web applications by communicating with designers
                and requesting REST APIs.
              </ExperienceItem>
              <ExperienceItem>
                Utilized priority queue data structure to optimize the
                sequencing of pop-ups in the app using Vue.js.
              </ExperienceItem>
            </ExperienceCard>
          </Stack>
        </HomePageItem>
        <HomePageItem title="Education">
          <Stack gap={1}>
            <ExperienceCard
              subtitle="University of Illinois at Urbana-Champaign"
              title="Master of Computer Science"
              startDate="Sep 2023"
              endDate="Dec 2024"
            >
              <ExperienceItem>Teaching Assistant for CS 412</ExperienceItem>
              <ExperienceItem>GPA 3.8/4.0</ExperienceItem>
            </ExperienceCard>
            <ExperienceCard
              subtitle="University of Wisconsin-Madison"
              title="Bachelor of Science"
              startDate="Sep 2020"
              endDate="May 2023"
            >
              <ExperienceItem>Major in Computer Science</ExperienceItem>
              <ExperienceItem>Major in Data Science</ExperienceItem>
              <ExperienceItem>GPA 3.8/4.0</ExperienceItem>
            </ExperienceCard>
          </Stack>
        </HomePageItem>
        <HomePageItem title="Projects">
          <ActionableExperienceCard
            title="Gomoku Game AI"
            startDate="May 2022"
            actionLink="https://github.com/Slijeff/game-ai"
          >
            <ExperienceItem>
              Developed an AI using Minimax algorithm to play the game of Gomoku
              then optimized with Alpha-Beta pruning algorithm and parallel
              computing with Multiprocessing that decreases 11% of the average
              calculation time in the first 10 steps.
            </ExperienceItem>
            <ExperienceItem>
              Constructed a back-end server to provide APIs using Flask and
              built a front-end interactive game board using React.
            </ExperienceItem>
            <ExperienceItem>
              Deployed the app to an Oracle Cloud compute instance and
              simplified deployment using Docker and Docker Compose.
            </ExperienceItem>
          </ActionableExperienceCard>
        </HomePageItem>
        <HomePageItem title="Skills">
          <Stack gap={2}>
            <SkillsItemLine title="Languages">
              <SkillsChip label="JavaScript" />
              <SkillsChip label="Python" />
              <SkillsChip label="Java" />
              <SkillsChip label="TypeScript" />
            </SkillsItemLine>
            <SkillsItemLine title="Frontend">
              <SkillsChip label="React" />
              <SkillsChip label="Next.js" />
              <SkillsChip label="Material-UI" />
              <SkillsChip label="Tailwind CSS" />
            </SkillsItemLine>
            <SkillsItemLine title="Backend">
              <SkillsChip label="Node.js" />
              <SkillsChip label="Express.js" />
              <SkillsChip label="MongoDB" />
              <SkillsChip label="PostgreSQL" />
            </SkillsItemLine>
            <SkillsItemLine title="Other">
              <SkillsChip label="Git" />
              <SkillsChip label="Linux" />
              <SkillsChip label="Docker" />
            </SkillsItemLine>
          </Stack>
        </HomePageItem>
      </Stack>
    </Stack>
  );
}
