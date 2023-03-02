
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'

const Profile: React.FC = () => {

return (
<Box padding="15px 0 10px" 
marginTop="10px"
 marginLeft="auto" 
 marginRight="auto" 
 width="420px" 
 rowGap="10px" 
 display="flex" 
 flexDirection="column" 
 boxShadow= "0px 2px 5px rgba(0, 0, 0, 0.25)"
 alignItems="center" 
 bgcolor='#fff'
 borderRadius="8px"
 >
    
<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
<Avatar alt="User"  sx={{ bgcolor: '#0c4f50', width: 100, height: 100 }} />
<Typography variant="h6">user</Typography>
</Box>
<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" rowGap="5px">
<Typography variant="body1">Email: user@example.com</Typography>
<Typography variant="body1">Location: New York, NY</Typography>
<Typography variant="body1">Interests: Technology, Science, Politics</Typography>
</Box>
</Box>
);
};

export default Profile;



