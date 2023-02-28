import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { IItem } from '../../types/types';

const NewsListItem: React.FC<IItem> = ({title, thumbnailUrl}) => {
    return (
        <Grid item xs md={3}>
        <Card sx={{height:'100%'}}>
            <CardMedia component="img" sx={{ height: 140 }} image={thumbnailUrl}/>
            <CardContent>
                <Typography color="inherit" variant='h6' component="h3">{title}</Typography> 
            </CardContent>
            <CardActions>
                <Button variant='contained' >Delete</Button>
            </CardActions>
        </Card>
        </Grid>
    );
};

export default NewsListItem;