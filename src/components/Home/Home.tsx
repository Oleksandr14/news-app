import { useTranslation } from 'react-i18next';

import Typography from '@mui/material/Typography';

const Home: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div>
      <Typography variant="h1" sx={{ marginBottom: '1rem', textAlign: 'center' }}>
        {t("home.title")}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
      {t("home.1")}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
      {t("home.2")}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
      {t("home.3")}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
      {t("home.4")}
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
      {t("home.5")}
      </Typography>
    </div>
  );
};

export default Home;
