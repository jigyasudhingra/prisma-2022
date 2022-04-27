import { Box } from '@material-ui/core';
import SocietyEvents, { CardDetailsProps } from 'Components/SocietyEvents';
import React from 'react';
import NavigationMenu from 'Screens/HomeScreen/NavigationMenu';
import { THEME_PALETTE } from 'Theme/themeConstants';

const EventsScreen = () => {
  const musicEventDetails: CardDetailsProps[] = [
    {
      eventName: 'Solo Singing',
      eventDetailSummary:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
      eventDetail: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint
          iure excepturi, ipsa doloremque beatae itaque quam aliquam. Ut a fuga
          excepturi atque, sunt sequi?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          commodi repellat accusamus delectus, ratione eos, omnis, ducimus
          consequatur error eveniet aliquid perspiciatis provident consequuntur
          expedita! Soluta id eligendi numquam eius voluptatem accusamus modi
          fugit earum nostrum provident molestiae enim dolores magni eos, hic
          dolore expedita quisquam dolorem culpa temporibus voluptatum.
        </div>
      ),
    },
    {
      eventName: 'Duet Singing',
      eventDetailSummary:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
      eventDetail: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint
          iure excepturi, ipsa doloremque beatae itaque quam aliquam. Ut a fuga
          excepturi atque, sunt sequi?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          commodi repellat accusamus delectus, ratione eos, omnis, ducimus
          consequatur error eveniet aliquid perspiciatis provident consequuntur
          expedita! Soluta id eligendi numquam eius voluptatem accusamus modi
          fugit earum nostrum provident molestiae enim dolores magni eos, hic
          dolore expedita quisquam dolorem culpa temporibus voluptatum.
        </div>
      ),
    },
    {
      eventName: 'Battle Of Bands',
      eventDetailSummary:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
      eventDetail: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint
          iure excepturi, ipsa doloremque beatae itaque quam aliquam. Ut a fuga
          excepturi atque, sunt sequi?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          commodi repellat accusamus delectus, ratione eos, omnis, ducimus
          consequatur error eveniet aliquid perspiciatis provident consequuntur
          expedita! Soluta id eligendi numquam eius voluptatem accusamus modi
          fugit earum nostrum provident molestiae enim dolores magni eos, hic
          dolore expedita quisquam dolorem culpa temporibus voluptatum.
        </div>
      ),
    },
    {
      eventName: 'Battle Of Bands',
      eventDetailSummary:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
      eventDetail: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint
          iure excepturi, ipsa doloremque beatae itaque quam aliquam. Ut a fuga
          excepturi atque, sunt sequi?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          commodi repellat accusamus delectus, ratione eos, omnis, ducimus
          consequatur error eveniet aliquid perspiciatis provident consequuntur
          expedita! Soluta id eligendi numquam eius voluptatem accusamus modi
          fugit earum nostrum provident molestiae enim dolores magni eos, hic
          dolore expedita quisquam dolorem culpa temporibus voluptatum.
        </div>
      ),
    },
    {
      eventName: 'Battle Of Bands',
      eventDetailSummary:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum ab, debitis blanditiis similique id deleniti atque aut impedit nihil. Officiis ipsam minus laboriosam sint! Optio, quis, animi odit quo quibusdam fugiat tempore quia ipsum, deleniti expedita itaque. Ea animi debitis voluptatibus quod repellendus repudiandae neque! At animi dolores ipsa consequatur.',
      eventDetail: (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint
          iure excepturi, ipsa doloremque beatae itaque quam aliquam. Ut a fuga
          excepturi atque, sunt sequi?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          commodi repellat accusamus delectus, ratione eos, omnis, ducimus
          consequatur error eveniet aliquid perspiciatis provident consequuntur
          expedita! Soluta id eligendi numquam eius voluptatem accusamus modi
          fugit earum nostrum provident molestiae enim dolores magni eos, hic
          dolore expedita quisquam dolorem culpa temporibus voluptatum.
        </div>
      ),
    },
  ];

  return (
    <Box>
      <NavigationMenu />
      <SocietyEvents
        backgroundColor={THEME_PALETTE.primary.main}
        cardColor={THEME_PALETTE.others.main}
        societyName="Music"
        contactDetails={{ name: 'Rajeev Kumar', phone: 556998774 }}
        details={musicEventDetails}
      />
    </Box>
  );
};

export default EventsScreen;
