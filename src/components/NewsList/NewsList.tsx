import { useEffect, useState } from 'react';
import { Grid, Button, CircularProgress } from '@mui/material';

import NewsListItem from './NewsListItem';

import { fetchNews } from '../../utils/Api';

import { IItem } from '../../types/types';

const NewsList: React.FC = () => {
    const [news, setNews] = useState<IItem[]>([])
    const[page, setPage] = useState<number>(1)
    const[loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{
        setLoading(true)
        fetchNews(page).then(data => {
            setLoading(false)
            setNews(p => [...p, ...data])
        })
    }, [page])

    const deleteNews = async(id: number) => {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        });
        setNews(news.filter(el => el.id !== id));
    }

    const loadMore = () => {
        setPage(p => p + 1);
      };

    return (
        <>
         {news.length > 0 && (
        <Grid  container  spacing={1} sx={{mt: '10px', mb: '10px'}} >
            {news.map(({id, title, thumbnailUrl}) => {
                return  <NewsListItem key={id} id={id} title={title} thumbnailUrl={thumbnailUrl}  deleteNews={deleteNews}/>
            })}
        </Grid>
        )}

        {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
            <CircularProgress color="primary" />
        </div>
        ) : (
            <div style={{ textAlign: 'center' }} >
            <Button variant="outlined" onClick={loadMore}>Load More</Button>
            </div>
            )}
        
        </>
    );
};

export default NewsList;