import { useEffect, useState } from 'react';
import { Grid, Button } from '@mui/material';

import NewsListItem from './NewsListItem';

import { fetchNews } from '../../utils/Api';

import { IItem } from '../../types/types';

const NewsList: React.FC = () => {
    const [news, setNews] = useState<IItem[]>([])
    const[page, setPage] = useState<number>(1)
    console.log(page)

    useEffect(()=>{
        fetchNews(page).then(data => setNews(p => [...p, ...data]))
    }, [page])

    const loadMore = () => {
        setPage(p => p + 1);
      };

    return (
        <>
         {news.length > 0 && (
        <Grid  container  spacing={1} sx={{mt: '10px', mb: '10px'}} >
            {news.map(({id, title, thumbnailUrl}) => {
                return  <NewsListItem key={id} title={title} thumbnailUrl={thumbnailUrl}/>
            })}
        </Grid>
    )}
        <div style={{ textAlign: 'center' }} >
        <Button variant="outlined" onClick={loadMore}>Load More</Button>
        </div>
        
        </>
    );
};

export default NewsList;