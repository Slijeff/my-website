import { Raindrop } from '@/types/archive';
import { limitWords } from '@/utils/utils';
import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Box,
  Typography,
  Chip,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

interface ArchiveCardProps {
  item: Raindrop;
}
export const ArchiveCard = ({ item }: ArchiveCardProps) => {
  return (
    <Card
      key={item._id}
      variant="outlined"
      sx={{
        backdropFilter: 'blur(4px)',
        backgroundColor: 'transparent',
      }}
    >
      <CardActionArea
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <CardContent sx={{ p: 1 }}>
          <Stack gap={1} direction={'column'}>
            <Box>
              <Typography variant="body2">
                Archived on {new Date(item.created).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" fontWeight={'bold'}>
                {item.title}
                <LinkIcon
                  sx={{
                    color: 'primary.lighter',
                    fontSize: 'inherit',
                  }}
                />
              </Typography>
              <Typography variant="body2" fontStyle={'italic'}>
                {limitWords(item.excerpt, 25)}
              </Typography>
            </Box>

            <Stack direction={'row'} gap={1} overflow={'auto'}>
              {item.tags.map(tag => (
                <Chip key={tag} label={'#' + tag} size="small" />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
