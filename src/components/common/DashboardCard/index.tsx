import { Button, Card, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { memo } from 'react';

type Props = {
    label?: string;
    title: string;
    endIcon?: JSX.Element;
    backgroundColor: string;
    image?: string;
    children?: JSX.Element;
    borderColor: string;
    paraTitle?: string;
    icon: JSX.Element;
    buttonClick?: () => void;
};

const AppCardcompo = ({
    label,
    title,
    paraTitle,
    endIcon,
    backgroundColor,
    children,
    image,
    borderColor,
    icon,
    buttonClick,
}: Props) => {
    return (
        <>
            <Card
                sx={{
                    backgroundColor: 'white',
                    py: 3,
                    px: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    borderLeft: '3px solid' + borderColor,
                    borderRadius: '5px',
                }}
            >
                {label ? (
                    <Button
                        sx={{ width: '90%', backgroundColor }}
                        variant="contained"
                        onClick={buttonClick}
                    >
                        {label}
                    </Button>
                ) : (
                    <Container>
                        <Typography sx={{ color: '#4E73E1', width: '90%', ml: -2 }}>
                            {title}
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                fontSize: '1rem',
                                color: '#5A5C69',
                                ml: -2,
                            }}
                        >
                            {paraTitle}
                        </Typography>
                    </Container>
                )}
                <>
                    <div style={{ color: '#DDDFEB' }}>{icon}</div>
                </>
            </Card>
        </>
    );
};

export const DashboardCard = memo(AppCardcompo);