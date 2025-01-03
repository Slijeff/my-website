"use client";

import AnimateOnScreenSlideIn from "@/customization/animateOnScreenSlideIn";
import {
  CardContent,
  Stack,
  Typography,
  List,
  Card,
  CardActionArea,
} from "@mui/material";
interface ExperienceCardProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  startDate: string;
  endDate?: string;
  clickable?: boolean;
  actionLink: string;
}
export default function ActionableExperienceCard({
  children,
  title,
  subtitle,
  startDate,
  endDate,
  actionLink,
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
      whileHover={{ scale: 1.05 }}
      sx={{
        minWidth: "100%",
        backgroundColor: "transparent",
        backdropFilter: "blur(2px)",
      }}
      variant={"elevation"}
      elevation={2}
    >
      <CardActionArea onClick={() => window.open(actionLink, "_blank")}>
        {content}
      </CardActionArea>
    </Card>
  );
}
