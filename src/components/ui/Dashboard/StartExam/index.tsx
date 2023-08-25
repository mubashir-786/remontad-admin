import { AppButton, Card } from 'components';
import {  Box, CardContent, Typography } from '@mui/material';
import { TEST_MANAGEMENT } from 'routes';
import { useRouter } from 'next/router';

const StartExamComponent = () => {
  const router = useRouter()
  return (
    <Card sx={{ height: '100%', width: '100%' }}>
      <CardContent sx={{ px: 1 }}>
        <Box
          sx={{
            pt: 2,
            mb: 4
          }}
        >
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '15px',
              fontWeight: 700
            }}
            variant="body2"
          >
            Exam Date : 10-20-2021
          </Typography>
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: 700,
              display: 'flex',
              justifyContent: 'center',
            }}
            variant="body2"
          >
            Exam Time : 11:50am PST
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <AppButton
          onClick={()=>{
            router.push(TEST_MANAGEMENT)
          }}
            title={'Start Exam'}
            sx={{ mx: 1, }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export const StartExam = StartExamComponent;
