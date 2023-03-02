import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { INewsListItemProps } from '../../types/types';

const NewsListItem: React.FC<INewsListItemProps> = ({title, thumbnailUrl, id, deleteNews}) => {

   const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteNews(id);
    }
  };

    return (
        <Grid item xs md={3}>
        <Card sx={{height:'100%'}}>
            <CardMedia component="img" sx={{ height: 140 }} image={thumbnailUrl}/>
            <CardContent>
                <Typography color="inherit" variant='h6' component="h3">{title}</Typography> 
            </CardContent>
            {handleDelete && (
          <CardActions>
            <Button variant='contained' onClick={handleDelete}>Delete</Button>
          </CardActions>
        )}
        </Card>
        </Grid>
    );
};

export default NewsListItem;