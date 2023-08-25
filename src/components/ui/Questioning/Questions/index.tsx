import { Card } from 'components';
import { Box, CardContent, Typography } from '@mui/material';
type Props = {
    questions: any,
    currentQuestion: number
}

const QuestionsComponent = ({ questions, currentQuestion }: Props) => {
    return (
        <Card sx={{ height: '100%', width: '100%' }}>
            <CardContent sx={{ px: 4 }}>
                    <Typography variant='h6' sx={{ mb: 2 }}>History</Typography>
                <Box sx={{ maxWidth: 400, display:'flex' }}>
                    {
                        questions.map((item: any) => {
                            return (
                                <Box sx={{ display: 'flex' }}>
                                    <Typography sx={{display:'flex',mr:2, justifyContent:'center',alignItems:'center', fontSize: '16px', borderRadius: '50px', border: '1px solid lightgrey', width: '20px', height: '20px', color: `${item.id <= currentQuestion ? 'white !important' : 'black'}`,backgroundColor: `${item.id <= currentQuestion ? '#90EE90 !important' : 'white'}` }}>{item.id}</Typography>
                                 </Box>
                                )
                        })
                    }

                </Box>
            </CardContent>
        </Card>
    );
};

export const Questions = QuestionsComponent;
