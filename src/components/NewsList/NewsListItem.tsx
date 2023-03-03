import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import { useTranslation } from 'react-i18next';

import { INewsListItemProps } from '../../types/types';

const NewsListItem: React.FC<INewsListItemProps> = ({title, thumbnailUrl, id, deleteNews}) => {

  const { t } = useTranslation();

  const handleDelete = () => {
    if (window.confirm(`${t('news.warning')}`)) {
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
              <Button variant='contained' onClick={handleDelete}>{t('news.remove')}</Button>
            </CardActions>
          )}
        </Card>

        </Grid>
    );
};

export default NewsListItem;