import { AppButton, Card } from 'components';
import { Box, CardContent, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import { useState } from 'react'

type Props = {
    questions: any,
    currentQuestion: number,
    setCurrentQuestion: any
}

const QuestionComponent = ({ questions, currentQuestion, setCurrentQuestion }: Props) => {
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionChange = (event: any) => {
        setSelectedOption(event.target.value);
    };

    const handleNextQuestion = () => {
        if(selectedOption){
            setCurrentQuestion(currentQuestion + 1)
        }else{
            alert('Please select Option')
        }
    };
    return (
        <Card sx={{ height: '100%', width: '100%' }}>
            <CardContent sx={{ px: 4 }}>
                <Box sx={{ maxWidth: 400 }}>
                    <Typography variant='h6' >Question No {questions[currentQuestion]?.id}:</Typography >
                    <Typography variant='body2' sx={{ fontSize: '18px', mt: 2 }}>{questions[currentQuestion]?.question}</Typography>

                    <FormControl component="fieldset">
                        <RadioGroup value={selectedOption} onChange={handleOptionChange}>
                            {questions[currentQuestion]?.options.map((item: string) => {
                                return (
                                    <FormControlLabel value={item} control={<Radio />} label={item} />
                                )
                            })}
                        </RadioGroup>
                    </FormControl>
                    <Typography sx={{ display: 'block', mb: 4 }} variant='body2'></Typography>
                    <AppButton
                        onClick={handleNextQuestion}
                        title={'Next'}
                        sx={{ mx: 1 }}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export const Question = QuestionComponent;

