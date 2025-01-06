import AnimateTextFadeIn from '@/customization/animateTextFadeIn';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import TagIcon from '@mui/icons-material/Tag';

export default function Blogs() {
  return (
    <Stack gap={2}>
      <Typography variant="h3" fontWeight="bold" letterSpacing={-1}>
        <AnimateTextFadeIn>Blogs</AnimateTextFadeIn>
      </Typography>
      <Typography
        variant="h6"
        color="primary.light"
        fontStyle="italic"
        fontWeight="regular"
      >
        <AnimateTextFadeIn>Insights and Stories</AnimateTextFadeIn>
      </Typography>
      <Grid container spacing={2} direction={{ xs: 'column', sm: 'row' }}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Stack gap={2}>
            <Card
              variant="outlined"
              sx={{
                backdropFilter: 'blur(4px)',
                backgroundColor: 'transparent',
              }}
            >
              <CardActionArea
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent sx={{ p: 1 }}>
                  <Stack gap={1} direction="column">
                    <Box>
                      <Typography variant="body2">
                        Published on {new Date().toLocaleDateString()}
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        Blog Title
                      </Typography>
                      <Typography variant="body2" fontStyle="italic">
                        A brief description of the blog content goes here...
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </CardActionArea>
            </Card>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Stack direction="column" gap={2} alignItems="flex-start">
            <Stack direction={'row'} alignItems={'center'}>
              <TagIcon sx={{ fontSize: '24px' }} />
              <Typography variant="h6" fontWeight="bold">
                Tags
              </Typography>
            </Stack>
            <Stack gap={1} direction="row" flexWrap="wrap">
              {/* Add category chips or links here */}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
