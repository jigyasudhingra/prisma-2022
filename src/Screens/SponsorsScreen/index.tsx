import { Box, createStyles, makeStyles } from '@material-ui/core';
import Typo from 'Components/Typo';
import { useMediaQuery } from 'Hooks/useMediaQuery';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';
import MOJOLAND_IMG from '../../Assets/MojoLand.jpg';
import MACV_IMG from '../../Assets/MacV.jpg';
import TIMEX_IMG from '../../Assets/TIMEX.jpg';
import BALIJWAN_IMG from '../../Assets/Baljiwan.jpeg';

const SponsorsPage: React.FC = () => {
  const classes = useStyles();
  const { isDeviceSm } = useMediaQuery();
  return (
    <Box>
      <NavigationMenu />
      <Box className={classes.background} pt={11} pb={5}>
        {/* <Box className="subHeading" pt={13.5} width="100%" textAlign="center">
          <Typo
            variant={isDeviceSm ? 'caption' : 'body2'}
            className={classes.verticalLineText}
            gutterBottom
          >
            We Thank Our Sponsors
          </Typo>
          <Typo
            variant={isDeviceSm ? 'h5' : 'h4'}
            weight="bold"
            color="textPrimary"
            gutterBottom
          >
            OUR SPONSORS
          </Typo>
        </Box> */}
        <Box textAlign="center" pt={5}>
          <Box>
            <Typo variant="h5" weight="bold" color="secondary">
              CO-POWERED BY
            </Typo>
          </Box>
          <Box py={3}>
            <img
              src={MOJOLAND_IMG}
              alt="mojoland"
              width={250}
              height="auto"
              style={{ borderRadius: 10 }}
            />
          </Box>
          <Box px={!isDeviceSm ? 60 : 7}>
            <Typo
              variant="h6"
              weight="bold"
              color="secondary"
              gutterBottom
              style={{ letterSpacing: 1.1, textTransform: 'uppercase' }}
            >
              MOJOLAND
            </Typo>
            <Typo variant="body2">
              Out of all the entertainment and amusement parks that are
              currently rising in the NCR region, the Mojoland Water Park is
              indeed one of the best multi-theme parks in Murthal that promises
              its visitors to offer the best of everything when it comes to
              adrenaline-pumping rides and slides.
            </Typo>
          </Box>
        </Box>
      </Box>
      <Box style={{ backgroundColor: THEME_PALETTE.primary.main }} py={7}>
        <Box textAlign="center">
          <Box>
            <Typo variant="h5" weight="bold" color="secondary">
              GIFTING PARTNER
            </Typo>
          </Box>
          <Box py={3}>
            <img
              src={TIMEX_IMG}
              alt="mojoland"
              width={250}
              height="auto"
              style={{ borderRadius: 10 }}
            />
          </Box>
          <Box px={!isDeviceSm ? 60 : 7}>
            <Typo
              variant="h6"
              weight="bold"
              color="secondary"
              gutterBottom
              style={{ letterSpacing: 1.1, textTransform: 'uppercase' }}
            >
              TIMEX
            </Typo>
            <Typo variant="body2">
              They believe every watch has a soul. This comes from a relentless
              pursuit of craftsmanship, quality and design. In 1854, they
              combined European clockmaking and American ingenuity to take
              clocks from the mantels of the 1% and brought them to the world.
            </Typo>
          </Box>
        </Box>
      </Box>
      <Box style={{ backgroundColor: THEME_PALETTE.others.main }} py={7}>
        <Box textAlign="center">
          <Box>
            <Typo variant="h5" weight="bold" color="secondary">
              EYE WEAR PARTNER
            </Typo>
          </Box>
          <Box py={3}>
            <img
              src={MACV_IMG}
              alt="mojoland"
              width={250}
              height="auto"
              style={{ borderRadius: 10 }}
            />
          </Box>
          <Box px={!isDeviceSm ? 60 : 7}>
            <Typo
              variant="h6"
              weight="bold"
              color="secondary"
              gutterBottom
              style={{ letterSpacing: 1.1, textTransform: 'uppercase' }}
            >
              MacV
            </Typo>
            <Typo variant="body2">
              MacV is your ideal eyewear partner! Their range of MacV
              Sunglasses, MacV Eyeglasses, and MacV Prescription Lens allows you
              to a perfect perspective and protection. Your eyes are precious
              and need utmost care so to save them from harmful UV rays and beat
              the heat in the most stylish way, buy{' '}
              <a
                href="https://www.macv.in/"
                style={{
                  textDecoration: 'none',
                  color: THEME_PALETTE.secondary.main,
                }}
              >
                MacV Sunglasses
              </a>
              .
            </Typo>
          </Box>
        </Box>
      </Box>
      {/* <Box style={{ backgroundColor: THEME_PALETTE.primary.main }} py={7}>
        <Box textAlign="center">
          <Box>
            <Typo variant="h5" weight="bold" color="secondary">
              EVENT SPONSOR
            </Typo>
          </Box>
          <Box py={3}>
            <img
              src={F9_IMG}
              alt="mojoland"
              width={250}
              height="auto"
              style={{ borderRadius: 10 }}
            />
          </Box>
          <Box px={!isDeviceSm ? 60 : 7}>
            <Typo
              variant="h6"
              weight="bold"
              color="secondary"
              gutterBottom
              style={{ letterSpacing: 1.1, textTransform: 'uppercase' }}
            >
              F9 Go Karting
            </Typo>
            <Typo variant="body2">
              Their products are highly appreciated in the market place due to
              their optimum value in terms of speed, performance and safety. If
              you are looking for some boasts of a very well designed
              multi-level track, with interesting corners. F9 Go karting is the
              best place in Gurgaon Delhi NCR.
            </Typo>
          </Box>
        </Box>
      </Box> */}
      {details.map((d) => (
        <Box style={{ backgroundColor: d.backgroundColor }} py={7}>
          <Box textAlign="center">
            <Box>
              <Typo variant="h5" weight="bold" color="secondary">
                {d.partnership}
              </Typo>
            </Box>
            <Box py={3}>
              <img
                src={d.url}
                alt="mojoland"
                width={250}
                height="auto"
                style={{ borderRadius: 10 }}
              />
            </Box>
            <Box px={!isDeviceSm ? 60 : 7}>
              <Typo
                variant="h6"
                weight="bold"
                color="secondary"
                gutterBottom
                style={{ letterSpacing: 1.1, textTransform: 'uppercase' }}
              >
                {d.name}
              </Typo>
              <Typo variant="body2">{d.description}</Typo>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SponsorsPage;

const details = [
  {
    name: 'Baljiwan',
    description:
      'BALJIWAN Medicines Pvt. Ltd., Aligarh is a front runner organization in the field of Herbal Medicines in India. It was established in the year 1913 by Hakim Tulsi Prasad Agrawal. After the death of Hakim Sahab in the year 1952 his only son Shyam Sunder Agrawal started looking after the workings of this organization. At present Mr. Shyam Sunder Agrawal’s able sons are taking this business organization to great heights.',
    partnership: 'EVENT SPONSOR',
    url: BALIJWAN_IMG,
    backgroundColor: THEME_PALETTE.primary.main,
  },
];

const useStyles = makeStyles(() =>
  createStyles({
    background: {
      backgroundColor: THEME_PALETTE.others.main,
    },
    verticalLine: {
      borderLeft: `1px solid ${THEME_PALETTE.secondary.main}`,
      height: 75,
    },
    verticalLineText: {
      color: THEME_PALETTE.secondary.main,
      letterSpacing: 1.1,
    },
  })
);
