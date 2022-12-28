import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CircularDeterminate(props) {
    const [progress, setProgress] = React.useState(0);
    const [progressColor, setProgressColor] = React.useState("rgba(255,255,255,0.6)");

    React.useEffect(() => {
        // console.log(progress)
        return () => {
            if (progress >= 99) {
                setTimeout(() => {
                    console.log(props.restaurantDatabase)
                    props.restaurantDatabase.map((dataItem)=>{
                        if(props.itemId == dataItem.id){
                            let tempItem = dataItem
                            tempItem.completed = true
                            // props.setRestaurantDatabase({ ...props.restaurantDatabase, tempItem })
                        }
                    })                    
                    setProgressColor('success')
                }, 500);
                // props.itemId
            }
        }
    }, [progress])
    React.useEffect(() => {
        return () => {
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
            }, (props.value * 10));
        };
    }, []);
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress color='secondary' variant="determinate" value={progress} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="caption" component="div" color={progressColor}>
                    {`${progress}%`}

                </Typography>
            </Box>
        </Box>
    );
}