export interface IItem {
    id: number, 
    title: string, 
    thumbnailUrl: string, 
}

export interface INewsListItemProps extends IItem {
    deleteNews: (id: number) => void;
  }

export interface IIsLogin {
    initialState:{
      isAutheticated: boolean
    }
  }

 