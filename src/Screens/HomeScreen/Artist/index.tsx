import './Artist.css'
import React from 'react';
import { Box } from '@material-ui/core';
import { flexbox } from '@mui/system';
import Artist_Logo from '../../../Assets/ArtistLogo.png'
import Typo from 'Components/Typo';

const Artist: React.FC = () => {
    return (<Box bgcolor='#000000' display='flex' flexDirection='row' alignItems='center' p={4}>
        <Box >
        <Box width="100%" textAlign="center" pt={1}>
            <Typo style={{ fontSize: 38, color: '#ffff',textAlign: 'center' }} color="textPrimary" >
              About Artist
            </Typo>
          </Box>
        <img id='Artistlogo' src={Artist_Logo} width={150}/>
        </Box>
        <Box >
            <Typo id='AboutArtist'>
            PARMISH VERMA a young DIRECTOR, MODEL, SINGER & ACTOR, holds a leading position in the PUNJABI MUSIC industry.Although PARMISH has done sad and love songs, he is known more for his upbeat tracks. Some of his popular songs that define his style include Gal Ni Kadni (2017), Shada (2018) and Chal Oye (2019).The most eligible ‘Shada’ has fans across the world who follow him regularly and listen to his songs often. As PARMISH is very active on social media, his millions of fans are like part of the family.
            </Typo>

        </Box>
    </Box>)
}

export default Artist;