import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/photos';

export interface IData {
    id: number, title: string, thumbnailUrl: string
}

export const normalizeApi = (data:IData[]) => {
    return data.map(obj => ({
      id: obj.id,
      title: obj.title,
      thumbnailUrl: obj.thumbnailUrl,
    }));
  };

  export const fetchNews = async(page: number): Promise<IData[]> => {
    const url = `${baseUrl}?_limit=${12}&_page=${page}`
    const resp = await axios.get(url)
    const data = await resp.data
    return normalizeApi(data)
}