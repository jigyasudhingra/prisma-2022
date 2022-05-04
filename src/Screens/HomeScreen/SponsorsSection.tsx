import { Box, Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { THEME_PALETTE } from 'Theme/themeConstants';
import EventsSection from './EventsSection';

const SponsorsSection: React.FC = () => {
    return (
        <Box
        style={{ textAlignLast: 'center', backgroundColor: THEME_PALETTE.primary.main, color: 'white' }}
        textAlign="-webkit-center"
        >
            <EventsSection />
            <Grid container lg={12} item spacing={5} justifyContent="center">
                <Grid item lg={4} sm={6} xs={12} >
                    Hello
                </Grid>
                <Grid item lg={4} sm={6} xs={12} >
                    Hello
                </Grid>
                <Grid item lg={4} sm={6} xs={12} >
                    Hello
                </Grid>
            </Grid>
        </Box>
    )
}

export default SponsorsSection;