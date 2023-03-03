import { CircularProgress } from '@mui/material';

const Loader: React.FC = () => {
    return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
        <CircularProgress color="primary" />
    </div>
    );
};

export default Loader;