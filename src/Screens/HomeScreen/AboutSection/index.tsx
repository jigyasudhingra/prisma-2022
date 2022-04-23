import './AboutSection.css'
import React from 'react';
import { Box } from '@material-ui/core';
import { flexbox } from '@mui/system';
import Prisma_Logo from '../../../Assets/PrismaLogo.png'
import Typo from 'Components/Typo';

const AboutSection: React.FC = () => {
    return (<Box bgcolor='#000000' display='flex' flexDirection='row' alignItems='center' p={4}>
        <Box >
        <Box width="100%" textAlign="center" pt={1}>
            <Typo style={{ fontSize: 38, color: '#ffff',textAlign: 'center' }} color="textPrimary" >
              About Prisma
            </Typo>
          </Box>
        <img id='prismalogo' src={Prisma_Logo} width={150}/>
        </Box>
        <Box >
            <Typo id='AboutPrisma'>
            The cultural festival PRISMA witnesses the gathering of zealous students from various universities to display their talents, connect, mingle and celebrate their artistry together. 
At SRM we celebrate our exuberant Annual Cultural Festival PRISMA, The fest is organized by the students themselves, which gives them the opportunity to enhance their management and organizing skills .
Its a PRISMATIC event which enlightens the heart of every student. Students take part in various cultural events and expand the horizons of their talents whilst celebrating their artistic visions together.
            </Typo>

        </Box>
    </Box>)
}

export default AboutSection;