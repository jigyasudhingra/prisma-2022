import React from 'react';

const musicEventDetails = [
  {
    eventName: 'Solo Singing',
    eventDetailSummary:
      'Time allotted is not less than 2 minutes and not more than 5 minutes including setup time. Judgement will be made on the qualities like vo',
    eventDetail: (
      <div>
        The number of accompanists should not be more than two.<br /><br />
        Time allotted is not less than 2 minutes and not more than 5 minutes including setup time.<br /><br />
        Judgement will be made on the qualities like voice, composition, rhythm, co-ordination and
        general impression etc.<br /><br />
        Participants must bring their own instruments.<br /><br />
        You can use a backing track/karaoke. (Making sure it has no vocals/background vocals)<br /><br />
        Vulgar words prohibited.<br /><br />
        Exceeding the time limit will result in deduction of points.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Duet Singing',
    eventDetailSummary:
      'Time allotted is not less than 2 minutes and not more than 5 minutes including setup time.Max number of accompanists is 2 including instrumentalists.',
    eventDetail: (
      <div>
        Time allotted is not less than 2 minutes and not more than 5 minutes including setup time.<br /><br />
       Max number of accompanists is 2 including instrumentalists.<br /><br />
      Judgement will be made on the qualities like synchronisation, voice, composition, rhythm,
        chemistry, co-ordination and general impression etc.<br /><br />
       Participants must bring their own instruments.<br /><br />
       You can use a backing track/karaoke. (Making sure it has no vocals/background vocals)
      Vulgar words prohibited.<br /><br />
       Exceeding the time limit will result in deduction of points.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Battle Of Bands',
    eventDetailSummary:
      'Time allotted is not less than 5 minutes and not more than 10 minutes, including the setup time.Minimum number of participants should be 3 and maximum should be 5 including instrumentalists.',
    eventDetail: (
      <div>
        Time allotted is not less than 5 minutes and not more than 10 minutes, including the setup time.<br /><br />
 Minimum number of participants should be 3 and maximum should be 5 including instrumentalists.<br /><br />
 Judgement will be based on the quality of singing, composition, group co-ordination, synchronisation,
rhythm and general impression.<br /><br />
 Participants must bring their own instruments. (Only a drum set will be provided)<br /><br />
 No backing track/karaoke allowed.<br /><br />
 Vulgar words prohibited.<br /><br />
 Exceeding the time limit will result in deduction of points.<br /><br />
    </div>
    ),
  },
  {
    eventName: 'Group Singing',
    eventDetailSummary:
      'Time allotted is not less than 5 minutes and not more than 10 minutes, including the setup time.Minimum number of participants should be 4 and maximum should be 8. Minimum vocalists should be 2. Instrumentalists are optional.',
    eventDetail: (
      <div>
        Time allotted is not less than 5 minutes and not more than 10 minutes, including the setup time.<br /><br />
Minimum number of participants should be 4 and maximum should be 8. Minimum vocalists should be 2.
 Instrumentalists are optional.<br /><br />
Judgment will be based on the quality of singing, group co-ordination, harmonies, synchronisation,
composition, rhythm and general impression.<br /><br />
Participants must bring their own instruments.<br /><br />
 Backing track/karaoke allowed.<br /><br />
 Vulgar words prohibited.<br /><br />
      </div>
    ),
  },
  
];

const dramaEventDetails = [
  {
    eventName: 'Nukkad Natak',
    eventDetailSummary:
      'A team can comprise of maximum 20-25 members including backstage/technical crew. A team should not exceed more than 25 members in any case.Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is strictly prohibited and any act under such charges will be disqualified immediately.',
    eventDetail: (
      <div>
        A team can comprise of maximum 20-25 members including backstage/technical crew. A
team should not exceed more than 25 members in any case.<br /><br />
Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is
strictly prohibited and any act under such charges will be disqualified immediately.<br /><br />
No costumes, props etc. will be provided by the organisers and the teams need to arrange
these on their own.<br /><br />
The choice of topic/theme should be based on a Social Issue.<br /><br />
Duration of the act should be maximum 15-20 mins afterwards negative marking would be
done.<br /><br />
Negative marks for not following the bound time constraints.<br /><br />
In case of any situations which have or have not been described in the rules, the decision
taken by the judges and the organisers will be final.<br /><br />
Language can be Hindi/English. Regional touch can be given to an extent.<br /><br />
No electronic musical instruments are allowed.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Monologue',
    eventDetailSummary:
      'Team of 1 member. Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is strictly prohibited and any act under such charges will be disqualified immediately.',
    eventDetail: (
      <div>
        Team of 1 member<br /><br />
Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is
strictly prohibited and any act under such charges will be disqualified immediately.<br /><br />
No costumes, props etc. will be provided by the organisers and the teams need to arrange
these on their own.<br /><br />
The choice of topic/theme should be based on a Social Issue.<br /><br />
Duration of the act should be maximum 5-10 mins afterwards negative marking would be
done.<br /><br />
Negative marks for not following the bound time constraints.<br /><br />
In case of any situations which have or have not been described in the rules, the decision
taken by the judges and the organisers will be final.<br /><br />
Language can be Hindi/English. Regional touch can be given to an extent.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Duo Acting',
    eventDetailSummary:
      'Team of 2 members. Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is strictly prohibited and any act under such charges will be disqualified immediately.',
    eventDetail: (
      <div>
        Team of 2 members<br /><br />
Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is
strictly prohibited and any act under such charges will be disqualified immediately.<br /><br />
No costumes, props etc. will be provided by the organisers and the teams need to arrange
these on their own.<br /><br />
The choice of topic/theme should be based on a Social Issue.<br /><br />
Duration of the act should be maximum 5-10 mins afterwards negative marking would be
done.<br /><br />
Negative marks for not following the bound time constraints.<br /><br />
In case of any situations which have or have not been described in the rules, the decision
taken by the judges and the organisers will be final.<br /><br />
Language can be Hindi/English. Regional touch can be given to an extent.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Standup Comedy',
    eventDetailSummary:
      'Team of 1 or 2 members. Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is strictly prohibited and any act under such charges will be disqualified immediately.',
    eventDetail: (
      <div>
        Team of 1 or 2 members<br /><br />
Clothing or actions that could be perceived as obscene, lewd, vulgar or plainly offensive is
strictly prohibited and any act under such charges will be disqualified immediately.<br /><br />
No costumes, props etc. will be provided by the organisers and the teams need to arrange
these on their own.<br /><br />
The choice of topic/theme should be based on a Social Issue.<br /><br />
Duration of the act should be maximum 10 - 15 mins afterwards negative marking would
be done.<br /><br />
Negative marks for not following the bound time constraints.<br /><br />
In case of any situations which have or have not been described in the rules, the decision
taken by the judges and the organisers will be final.<br /><br />
Language can be Hindi/English. Regional touch can be given to an extent.<br /><br />
      </div>
    ),
  },
];
const ArtsoloEventDetails = [
  {
    eventName: 'Anime Sketch',
    eventDetailSummary:
      'The anime art form, having originated in Japan in the early 1900s, is a uniquely stylized form of two- and three-dimensional illustration and animation that is now recognized globally.',
    eventDetail: (
      <div>
        The anime art form, having originated in Japan in the early 1900s, is a uniquely stylized form of two- and
three-dimensional illustration and animation that is now recognized globally.<br /><br />
MATERIALS CAN BE USED<br />
1. Pencil<br />
2. Crayon<br />
3. Water colour<br />
4. Oil pastel<br />
5. Poster colour<br />
6. Sketch pens<br /><br />
GENERAL RULES:<br />
• Only one participant can contest for one entry.<br />
• Event will be conducted ‘On the spot’.<br />
• Participants shall bring their own material.<br />
• An A4/A3 sheet will be provided by the organizers before the commencement of the competition
[Participants are expected to carry their own art material (except for the sheet)]
• Time limit will be provided on-spot<br />
      </div>
    ),
  },
  {
    eventName: 'Still Life Painting',
    eventDetailSummary:
      'A still life is a drawing or painting that focuses on still objects. The subject matter is inanimate and never moves, typically with a focus on household objects, flowers, or fruits.',
    eventDetail: (
      <div>
        A still life is a drawing or painting that focuses on still objects. The subject matter is inanimate
and never moves, typically with a focus on household objects, flowers, or fruits.<br /><br />
MATERIALS CAN BE USED<br />
1. Pencil<br />
2. Eraser<br />
3. Pen<br />
4. Painting colours (Acrylic/Poster/Water)<br />
5. Painting brushes<br />
6. Pencil colours<br />
GENERAL RULES:<br /><br />
• Only one participant can contest for one entry.<br />
• all the participants are requested to bring their own art materials.<br />
• subject will be provided<br />
• mixed media art is allowed water colour, acrylic, oil, pencil etc)<br />
• time limit will be provided on-spot
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Mandala Art',
    eventDetailSummary:
      'Mandala art is the form of traditional painting, born in ancient times and getting reformed day by day.',
    eventDetail: (
      <div>
        Mandala art is the form of traditional painting, born in ancient times and getting reformed day by day.<br /><br />
GENERAL RULES:-<br />
• Only one participant can contest for one entry.<br />
• all the participants are requested to bring their own art materials.<br />
• mixed media art is allowed (water colour, acrylic, oil, pencil, pen, pastels etc)<br />
• sheets will be provided(a3/a4)<br />
• time limit will be provided on-spot
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Painting',
    eventDetailSummary:
      ' Painting is the practice of applying paint, pigment, color or other medium to a solid surface. The medium is commonly applied to the base with a brush, but other implements, such as knives, sponges,and airbrushes, can be used. In art, the term painting describes both the act and the result of the action.',
    eventDetail: (
      <div>
        Painting is the practice of applying paint, pigment, color or other medium to a solid surface. The
medium is commonly applied to the base with a brush, but other implements, such as knives, sponges,
and airbrushes, can be used. In art, the term painting describes both the act and the result of the
action.<br /><br />
GENERAL RULES:-<br />
• This is a solo event.<br />
• Competition will be conducted on the spot. No ready or semi-finished matter would be accepted from
participant in competition.<br />
• Organizer will provide drawing sheet. Participants must bring their drawing materials.<br />
• Theme will be given on spot.<br />
• Participants are given two hours to complete this competition.<br />
• Participants will be judged on creativity, accuracy, clarity, presentation and relevancy to the theme.<br />
• No mobile or Internet means would be allowed to use at the time of Competition.<br />
• The decision of the judges will be considered final and abiding.
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Rangoli Making',
    eventDetailSummary:
      'Rangoli is an art form in which patterns are created on the floor or the ground using materials such as colored rice, dry flour, colored sand or flower petals. Rangoli designs can be simple geometric shapes, deity impressions, or flower and petal shapes (appropriate for the given celebrations). Apart from lines, rangolis can also be created by drawing dots.',
    eventDetail: (
      <div>
        Rangoli is an art form in which patterns are created on the floor or the ground using materials such as
colored rice, dry flour, colored sand or flower petals. Rangoli designs can be simple geometric shapes,
deity impressions, or flower and petal shapes (appropriate for the given celebrations). Apart from lines,
rangolis can also be created by drawing dots.<br /><br />
MATERIALS THAT CAN BE USED:-<br />
1. RANGOLI COLORS<br />
2. SAW DUST AND MARBLE DUST<br />
3. COLORED STONES<br />
4. RICE AND RAWA<br />
5. PETALS/ LEAVES<br />
6. FABRIC COLORS<br /><br />
RULES:-<br />
• This will be a solo event.<br />
• Duration will not be more than 2 hours.<br />
• 10mins cooling time will be given to draw a rough sketch of Rangoli.<br />
• Event will be conducted on the spot.<br />
• Participants must bring their own required material.<br />
• The medium and form for expression can be free hand, pictorial and descriptive.<br />
• More than one media can be used from the above mentioned materials.<br />
• No mobile or Internet means would be allowed to use at the time of Competition.<br />
• Participants will be judged on creativity, accuracy, artistic composition and presentation.<br />
• The decision of the judges will be considered final and abiding<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Calligraphy',
    eventDetailSummary:
      'Calligraphy is a visual art related to writing. It is the design and execution of lettering with a broad tipinstrument, brush, or other writing instruments.. A contemporary calligraphic practice can be defined as "the art of giving form to signs in an expressive, harmonious, and skillful manner".',
    eventDetail: (
      <div>
        Calligraphy is a visual art related to writing. It is the design and execution of lettering with a broad tip
instrument, brush, or other writing instruments..A contemporary calligraphic practice can be defined as "the art
of giving form to signs in an expressive, harmonious, and skillful manner".<br /><br />
RULES:<br />
• This is a solo event.<br />
• Competition will be conducted on the spot. No ready or semi-finished matter would be accepted from
participant in competition.<br />
• Organizer will provide A3 size paper. Participants must bring their own writing tools.<br />
• Participants have the option of using simplified/traditional writing sample either in English or Hindi.<br />
• Participants are given one hour to complete this competition.<br />
•.Participants will be judged on creativity, accuracy, clarity and presentation.<br />
• No mobile or Internet means would be allowed to use at the time of Competition.<br />
• The decision of the judges will be considered final and abiding.
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Face-Painting',
    eventDetailSummary:
      'Face painting, simply defined, is the act of applying cosmetic paint to a persons face for entertainment,theatrical, or even symbolic reasons.',
    eventDetail: (
      <div>
        Face painting, simply defined, is the act of applying cosmetic paint to a person's face for entertainment,
theatrical, or even symbolic reasons.<br /><br />
RULES:<br />
• This is a solo event.<br />
• Participants may bring their subjects along with them<br />
• Subject interfering will lead to disqualification<br />
• Duration will be told on spot<br />
• Participants are requested to bring their own materials<br />
• No electronic gadgets allowed<br />
• Decision made by the judges will be final
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'DIY - Best Out Of Waste',
    eventDetailSummary:
      'Recycling is a key component of modern waste reduction and is the third component of the “reduce, reuse and recycle” waste hierarchy.',
    eventDetail: (
      <div>
        Recycling is a key component of modern waste reduction and is the third component of the “reduce, reuse and
recycle” waste hierarchy. BEST OUT OF WASTE is one such craft which follows this environmental friendly
principle and at the same time creates useful and picturesque objects out of waste products. This event is to
bring such ideas to students and to help them think themselves on such ways of reusing everyday materials that
will not only reduce the waste but provide them with useful household products. The idea will not only be of
economic and material value for students, but will be helpful in creating environmental consciousness among
them that is the need of the hour.<br /><br />
RULES:<br />
• It is a solo event.<br />
• Participants must carry their own required materials/products. The required waste material and stationery
like scissor, thread, etc. should be brought by the participants.<br />
• Duration will not be more than 2hrs.<br />
• At last, 5 minutes will be given for presentation to each participant.<br />
• Participants may use any kind of retarded stuff/material/product and convert them in to something useful.
Waste material could be anything like tetra packs, bottles, newspapers, old utensils, jute material or any second
hand items that otherwise would be thrown away.<br />
• The material would be rejected if not found to be a waste product or second hand item.<br />
• No ready or semi-finished matter would be accepted from participant in competition.<br />
• Participants will be judged on Creativity, Utilization of Resources, Artistic composition & design, Eco-friendly
rating, Utility of the Product and Overall Presentation.<br />
• No mobile or Internet means would be allowed to use at the time of Competition.<br />
• The decision of the judges will be considered final and abiding
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Mask Making',
    eventDetailSummary:
      'The masking effect or masking is a visual style, dramatic convention, and literary technique described by cartoonist Scott McCloud in his book Understanding Comics in the chapter on realism.',
    eventDetail: (
      <div>
        The masking effect or masking is a visual style, dramatic convention, and literary technique described by
cartoonist Scott McCloud in his book Understanding Comics in the chapter on realism. Most solid masks require
an adhesive to hold the mask in place while work is performed. Some, such as masking tape and frisket, come
with adhesive pre-applied. Solid masks are readily available in bulk, and are used in large painting jobs. Liquid
masks are preferred where precision is needed; they prevent paint from seeping underneath, resulting in clean
edges. Care must be taken to remove them without damaging the work underneath.<br /><br />
MATERIALS THAT CAN BE USED:<br />
1.Paper products<br />
2.Kraft paper<br />
3.Butcher paper<br />
4.Masking tape<br />
5.Plastic film<br />
6.Frisket<br />
7.Polyester tap<br />
8.Stencils<br />
9.Silk screen<br />
10.Latex or other polymers<br />
11.Molten wax<br />
12.Gesso, typically a substrate for painting, but can also be applied to achieve masking effects<br /><br />
GENERAL RULES:<br />
• This is a solo event.<br />
• Duration given will not be more than 2 hours.<br />
• Event will be on the spot.<br />
• Participants must bring their own required material.<br /><br />
      </div>
    ),
  },
];
const ArtgroupEventDetails = [
  {
    eventName: 'T-Shirt Painting',
    eventDetailSummary:
      'T-shirt painting is a fun event where you just need to bring an old shirt of yours and show us your creativity. Making a DIY T-shirt painting is an original and fun way to breathe new life into your old clothes.',
    eventDetail: (
      <div>
        T-shirt painting is a fun event where you just need to bring an old shirt of yours and show us your
creativity. Making a DIY T-shirt painting is an original and fun way to breathe new life into your old
clothes. You can use ready-made stencils to copy your favourite designs, logos, or sayings.
Alternatively, you can get creative and freehand your own T-shirt painting ideas.<br /><br />
MATERIALS THAT CAN BE USED:<br />
1. Sketch pens<br />
2. Acrylic Pencils<br />
3. Poster colours<br />
4. Scissors<br />
5. Stencils (if required)<br />
6. Rulers<br />
7. T-shirt will be provided<br /><br />
GENERAL RULES:<br />
• The participation will be in a group (max 4 members).<br />
• The participants will be required to do the painting on the theme which will be announced 24 hours before
the commencement of the event.<br />
• Event will be conducted ‘On The Spot’.<br />
• Duration will be announced on the spot<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Poster Making',
    eventDetailSummary:
      'A Poster is any piece of printed paper designed to be attached to a wall or vertical surface. Posters are designed to be both eye-catching and informative.',
    eventDetail: (
      <div>
        A Poster is any piece of printed paper designed to be attached to a wall or vertical surface. Posters are designed
to be both eye-catching and informative. They are a frequent tool of advertisers (particularly of events,
musicians, and films), propagandists, protestors, and other groups trying to communicate a message. Posters
are also used for reproductions of artwork, particularly famous works, and are generally low-cost compared to
the original artwork.<br /><br />
MATERIALS THAT CAN BE USED:<br />
1. Sketch pens<br />
2. Colour Pencils<br />
3. Crayons<br />
4. Scissors<br />
5. Stencils (if required)<br />
6. Rulers<br /><br />
GENERAL RULES:<br />
• The participation will be in a group (max 4 members).<br />
• The participants will be required to do the Poster Making on the theme which will be announced 24 hours
before the commencement of the event.<br />
• Event will be conducted ‘On The Spot’.<br />
• Participants will bring their own material. An A3 sheet will be provided by the organizers before the start of
the competition.<br />
• Duration will be announced on the spot<br /><br />
GENERAL RULES:<br />
1) ALL THE TOPICS TO BE ANNOUNCED ON THE SPOT<br />
2) NO ELECTRONIC DEVICES ALLOWED<br />
3) NO RESTRICTIONS ON MATERIALS REQUIRED<br />
4) DURATION OF EVERY EVENT TO BE ANNOUNCED ON THE SPOT<br />
5) DECISION MADE BY THE JUDGES WILL BE FINAL<br /><br />
      </div>
    ),
  },

  
];
const danceEventDetails = [
  {
    eventName: 'Group Dance(Western/General)',
    eventDetailSummary:
      'Team of not more than 18 students & not less than 6 students. Team may consist of boys, girls or both.',
    eventDetail: (
      <div>
        1. Team of not more than 18 students & not less than 6 students.<br />
2. Team may consist of boys, girls or both.<br />
3. Duration of the Dance should not be more than 10 mins.<br />
4. No individual will be adjudged as Best Dancer.<br />
5. The participating teams will be responsible for removing of their
sets/properties immediately after the completion of their performance.<br />
6. Track to be emailed 2 days beforehand along with name and contact number as
the file name.<br />
7. If the time limit exceeds negative marking would be done.<br />
8. The participants must report to the Stage Secretary at least 30 minutes before
the commencement of the Event.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Duet Dance (Western/General)',
    eventDetailSummary:
      'A College/Institution can enter only 2 participants. Time allowed for Dance is not more than 4 minutes.',
    eventDetail: (
      <div>
        1. A College/Institution can enter only 2 participants.<br />
2. Time allowed for Dance is not more than 4 minutes.<br />
3. Judgment will be based on formation, music, singing, costume, make-up,
coordination and overall impact.<br />
4. Track to be emailed 2 days beforehand along with name and contact number as
the file name.<br />
5. If the time limit exceeds negative marking would be done.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Face Off',
    eventDetailSummary:
      ' It will be a dance faceoff between 2 teams at a time. The timer for a team starts as soon as the dancers (solo, duo or group) step into the performance area and will be switched after 45 seconds.',
    eventDetail: (
      <div>
        1. It will be a dance faceoff between 2 teams at a time.<br />
2. The timer for a team starts as soon as the dancers (solo, duo or group) step into
the performance area and will be switched after 45 seconds.<br />
3. The music will be provided to each team 5-minutes just before the
performance.<br />
4. Participants must not physically interfere with their opponents’ performance in
the battle. Doing so will result in negative points or straight away disqualification.<br />
5. One team will be selected after each battle. So, the team which will perform
better in the last battle will be the winner.<br />
6. The decision of the judges shall be final and binding.
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Dance Solo (Western/General) (Male/Female)',
    eventDetailSummary:
      'Time allowed for Dance is not more than 3 minutes. The number of accompanists admissible is three if required.',
    eventDetail: (
      <div>
        1. Time allowed for Dance is not more than 3 minutes.<br />
2. The number of accompanists admissible is three if required.<br />
3. Judgment will be based on formation, music, singing, costume, make-up,
coordination and overall impact.<br />
4. Track to be emailed 2 days beforehand along with name and contact number as
the file name.<br />
5. If the time limit exceeds negative marking would be done.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Classical solo dance',
    eventDetailSummary:
      'Time allowed for Dance is not more than 4 minutes. Judgment will be based on formation, costume, make-up, coordination, footwork, expressions and overall impact.',
    eventDetail: (
      <div>
       1. Time allowed for Dance is not more than 4 minutes.<br />
2. Judgment will be based on formation, costume, make-up, coordination,
footwork, expressions and overall impact.<br />
3. Track to be emailed 2 days beforehand along with name and contact number as
the file name.<br />
4. If the time limit exceeds negative marking would be done.<br /><br />
      </div>
    ),
  },

  
];
const FashionEventDetails = [
  {
    eventName: 'Fashion Show',
    eventDetailSummary:
      'It is an individual event.There will be 3 rounds in the event.',
    eventDetail: (
      <div>
        1.It is an individual event.<br />
        2.There will be 3 rounds in the event.<br />
        3.First round will be elimination round(based on theme- BOHEMIAN), performance will be judged on costumes and ramp walk.<br />
        4.Second round will be innovation round,"A Social Message". Participants are going to carry the costume/props/accessories. The costume can be same or different according to the theme mentioned below.<br />
        5.Third round will be the questionnaire round, participants will be judged on the basis of confidence and personalities.<br />
        6.Green room will be provided for the changing purpose.<br />
        7.Vulgarity is strongly prohibited. Any form of obscenity will lead to debarring the participants.<br />
        8.Decision of judges will be final and binding.<br /><br />
      </div>
    ),
  },
];
const LiteraryEventDetails = [
  {
    eventName: 'Poetry',
    eventDetailSummary:
      'Poetry can be written in any poetic style and on any subject. A poem in its entirety must be an original work by the person entering the contest. [No plagiarism]',
    eventDetail: (
      <div>
        1. Poetry can be written in any poetic style and on any subject.<br />
2. A poem in its entirety must be an original work by the person entering the
contest. [No plagiarism]<br />
3. Time limit:1-2 min<br />
4. Language-Hindi/English<br />
5. No vulgar/obscene words to be used.<br />
6.Participants must reach 20 minutes before the given time.<br /><br />
JUDGEMENT CRITERION:<br />
1.Relevance to theme-50%<br />
2. Creativity,style and orginality-30%<br />
3.Coherence of Form and structure-10%<br />
4. Clarity of Imagery and language-10%<br />
5. Certificates will be awarded to all participants.
      </div>
    ),
  },
  {
    eventName: 'Short Story Telling',
    eventDetailSummary:
      'Only one entry will be allowed per author. Time limit: 2.5-3.5 minutes.',
    eventDetail: (
      <div>
        Rules:<br /><br />
1. Only one entry will be allowed per author.<br />
2. Time limit: 2.5-3.5 minutes.<br />
3. Short story can be on any theme (Personal experience, non-fiction)<br />
4. You have to introduce the title of the story in the beginning and then start with the narration.<br />
5. Certificates will be awarded to all participants.<br />
6. Participants must reach 20 minutes before the given time.<br /><br />
JUDGEMENT CRITERION:<br />
1. Relevancy to Title.<br />
2. Creativity, originality.<br />
3. Coherence of form and structure.<br />
4. Clarity of Language.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Extempore Competition',
    eventDetailSummary:
      'Participant has to speak only in English. The topic will be provided on the spot to every participant',
    eventDetail: (
      <div>
        Rules:<br /><br />
1. Participant has to speak only in English.<br />
2. The topic will be provided on the spot to every participant<br />
3. Maximum time limit to think over the topic will be: 2 minutes and the maximum time for speech will
be: 2-3 minutes.<br />
4. Participants will not be allowed to use any written material during the speech.<br />
5. Certificates will be awarded to all participants.<br />
Judging Criteria:<br /><br />
Participants will be judged on the following criteria:-<br />
1. Approach/Departure<br />
2. Poise/Self-confidence<br />
3.Voice projection/Inflection<br />
4.Diction/Enunciation<br />
5.Facial Expressions<br />
6.Clear presentation of ideas/content clarity<br />
7.Worthwhile Message.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Breaking the news',
    eventDetailSummary:
      'It is an event related to journalism which will look into skill of news reporting. News material will be given to you 5 minutes prior to your turn.',
    eventDetail: (
      <div>
        Rules:-<br /><br />
1. It is an event related to journalism which will look into skill of news reporting.<br />
2. News material will be given to you 5 minutes prior to your turn.<br />
3. You have to report for 1-1.5 minutes.<br />
4. Language-English/Hindi<br />
5. No vulgar/obscene words to be used.<br /><br />
Judgement CRITERION:<br />
1. Presentation Speed<br />
Tip:(Not too slow, not too fast)<br />
2. Content clarity<br />
3. Facial<br />
Expressions/gestures<br />
4. Voice Projection<br />
5. Structuring of News<br />
6.Approach<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Bookworm test',
    eventDetailSummary:
      'Participants will be given material to read i.e minimum 10-15 pages within 2 minutes.',
    eventDetail: (
      <div>
        Rules-<br /><br />
1. Participants will be given material to read i.e minimum 10-15 pages within 2 minutes.<br />

2. After 2 minutes, an MCQ sheet containing questions related to the content.<br />
3. Participants certificates will be awarded to all participants.<br />
4. Participants must reach 20 minutes before the given time.<br /><br />
Judgement criterion:<br />
Scores in mcq sheet.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'SPELL BEE',
    eventDetailSummary:
      '1 minute will be given to each participant to spell the allotted word. The decision of judges will be final and complying on all the participants.',
    eventDetail: (
      <div>
        Rules:-<br />
1. 1 minute will be given to each participant to spell the allotted word.<br />
2. The decision of judges will be final and complying on all the participants.<br />
3. If the correct spelling was given, the participant continues in the game.<br />
4. All participants have to report at least 20 minutes prior to the commencement of the event.<br />
5. The contestant has to listen carefully and can ask the judge to repeat the word twice if necessary.<br />
6. The speller has to the spell the word in one go and very loudly and clearly, If he/she fails to
do so the speller will be given a caution chip and if this offence is committed again the speller
will be disqualified.<br />
7. When there are only two players left and one misspells the word given to them, then the other
has to spell the same word plus one more word to be declared the winner of the Spell bee.<br />
. 8. Participants certificates will be awarded to all participants.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Debate',
    eventDetailSummary:
      'The topics will be provided to the participants 3 days prior to the event. Every topic will have two sides – favor and against.',
    eventDetail: (
      <div>
        1. The topics will be provided to the participants 3 days prior to the event. Every topic will have two
sides – favor and against.<br />
2. Medium of expression will be English.<br />
3. Each speaker is given a time of 3+1 minute, the first bell rings after 3 minutes and the last and final
bell after the completion of the 4th minute.<br />

4. Rebuttal is allowed and extra 1 min 30 secs will be given to the affirmative team, a maximum of
3 questions will be allowed.<br />
5. If the participant speaks for more or less than the time limit, marks will be deducted for the same.<br />
6. Dress code: formal<br />
7. Participants certificates will be awarded to all participants.<br />
8. Participants must reach 20 minutes before the given time.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Brain buzz',
    eventDetailSummary:
      'This event is open to all. Anyone can participate in this event.',
    eventDetail: (
      <div>
        This event is open to all. Anyone can participate in this event.<br /><br />
ROUND-1 (Rules for General Round)<br />
o Each team will be asked 2 questions of 10 marks each. They will be given 30 seconds for each
question.<br />
o If the allotted team is unable to answer the question, then the question will have passed on to the
subsequent teams.<br />
o Subsequent teams will be given 15 seconds to answer & will be awarded 5 marks for each correct
answer.<br /><br />
ROUND-2 (Rules for Buzzer Round)<br />
o There will be 8 questions in this round. Team pressing the buzzer first will be given the chance to
answer.<br />
o 15 marks will be awarded for each correct answer & 5 marks will be deducted for each incorrect
answer.<br />
o Team will be given 60 seconds for each question.<br /><br />
ROUND-3 (Rules for Specialized Subject)<br />
o Every team will have to choose their favorite subject out of Physics, Chemistry & Mathematics.<br />
o Every team will be asked 2 questions from their chosen subjects.<br />
o They will be given 60 seconds for each question.<br />
o 15 marks will be awarded for every correct answer.<br /><br />
ROUND-4 (Rules for Personality Identification Round)<br />
o Every team will be asked to identify a personality.<br />

o Three hints will be provided for every question.<br />
o 20 marks will be awarded for the correct answer after 1st.<br />
o 15 marks will be awarded for the correct answer after 2nd.<br />
o 10 marks will be awarded for the correct answer after 3rd.<br />
o 60 seconds will be given for each question.<br /><br />

ROUND-5 (Rules for Rules – Rapid fire round)<br />
o Each team will be asked to nominate a member from their team.<br />
o Nominated member will be given 60 seconds for 10 questions in this round.<br />
o 5 marks will be awarded for each correct answer.<br />

Certificates will be awarded to all participants.<br />
Participants must reach 20 minutes before the given time.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'The Shayar Speaks',
    eventDetailSummary:
      'Shayari can be written in any poetic style and on any topic. No vulgar words can be used in the shayari presented by the contestant.',
    eventDetail: (
      <div>
        1. Shayari can be written in any poetic style and on any topic.<br />
2. No vulgar words can be used in the shayari presented by the contestant.<br />
3. Shayari can either be in Hindi or English.<br />
4. Shayari must be the entrant’s original work.<br />
5. Entries must not have been published, self-published, published on a website or made public<br />
on social media, broadcast or featured among the winners in another competition.<br />
6. Participants must reach 20 minutes before the given time.<br />
7. Certificates will be awarded to all participants.<br /><br />
      </div>
    ),
  },
  
];
const gamingcontrollerEventDetails = [
  {
    eventName: 'FIFA',
    eventDetailSummary:
      '1v1 Knock out 6-8 min/match',
    eventDetail: (
      <div>
        1. 1v1 Knock out<br />
 2. 6-8 min/match<br />
 3. Keyboard and Controllers
may be provided by Duality.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Tekken',
    eventDetailSummary:
      '1v1 Knock out 10 min/match',
    eventDetail: (
      <div>
        1. 1v1 Knock out<br />
 2. 10 min/match<br />
 3. Keyboard and Controllers
may be provided by Duality.<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Rocket League',
    eventDetailSummary:
      '1v1 Knock out 10 min/match',
    eventDetail: (
      <div>
        1. 1v1 Knock out<br />
 2. 10 min/match<br />
 3. Keyboard and Controllers
may be provided by Duality.<br /><br />
      </div>
    ),
  },
];
const gamingretroEventDetails = [
  {
    eventName: 'Mario',
    eventDetailSummary:
      'Speed run- Stage 1 & 2. Single Player Entry',
    eventDetail: (
      <div>
        1. Speed run- Stage 1 & 2<br />
 2. Single Player Entry<br />
 3. Keyboard and Controllers
may be provided by Duality<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Contra',
    eventDetailSummary:
      'High score. Single Player Entry',
    eventDetail: (
      <div>
        1. High score<br />
2. Single Player Entry<br />
3. Keyboard and Controllers may be
provided by Duality<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Road rash',
    eventDetailSummary:
      'High score Single Player Entry',
    eventDetail: (
      <div>
        1. High score<br />
 2. Single Player Entry<br />
 3. Keyboard and Controllers
may be provided by Duality<br /><br />
      </div>
    ),
  },
];
const gamingpcEventDetails = [
  {
    eventName: 'Valorant',
    eventDetailSummary:
      'Knock out mode. Single Map. 5 member/team.',
    eventDetail: (
      <div>
        1. Knock out mode.<br />
 2. Single Map.<br />
 3. 5 member/team.<br />
 4. 30-45min/match.<br />
 5. Headphones/Earphones
are mandatory.<br />
 6. Keyboard may be provided
by Duality.<br /><br />
*Rs.600 per team for only team gaming event.*<br />
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'CSGO',
    eventDetailSummary:
      ' Knock out mode. Single Map.',
    eventDetail: (
      <div>
        1. Knock out mode.<br />
2. Single Map.<br />
 3. In play-off veto.<br />
 4. 5 member/team.<br />
 5. 30-60min/match.<br />
 6. Headphones/Earphones are
mandatory.<br />
 7. Keyboard may be provided by
Duality.<br /><br />
*Rs.600 per team for only team gaming event.*<br />
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'COD',
    eventDetailSummary:
      'Knock out mode. Team Deathmatch. Best of 3.',
    eventDetail: (
      <div>
        1. Knock out mode.<br />
 2. Team Deathmatch.<br />
 3. Best of 3.<br />
 4. 7-10min/match.<br />
 5. Headphones/Earphones are
mandatory.<br />
 6. Keyboard may be provided
by Duality.<br /><br />
*Rs.600 per team for only team gaming event.*<br />
<br /><br />
      </div>
    ),
  },
];
const gamingmobileEventDetails = [
  {
    eventName: 'BGMI',
    eventDetailSummary:
      'Point table system according to ranks/kills/MVPs.',
    eventDetail: (
      <div>
        1. Point table system according to
ranks/kills/MVPs.<br />
 2. 4 member/Team for Entry.<br />
 3. Maps- Erangal & Miramar
predownloaded.<br />
 4. Headphones/Earphones are
mandatory.<br />
 5. Only latest version and non-hacked and
non-mode are allowed.<br />
 6. 40-80 person/match.<br /><br />
 *Rs.600 per team for only team gaming event.*<br />
 <br /><br />
      </div>
    ),
  },
  {
    eventName: 'COD: Mobile',
    eventDetailSummary:
      '5member/Team for Entry.Maps- Crash & Firing Range predownloaded.',
    eventDetail: (
      <div>
        1. 5member/Team for Entry.<br />
2. Maps- Crash & Firing Range
predownloaded.<br />
3. 5v5 Domination mode.<br />
4. 10-15min/match.<br />
5. 20-40person/match.<br />
6. Headphones/Earphones are mandatory.<br />
7. Only latest version and non-hacked and
non-mode are allowed.<br /><br />
 *Rs.600 per team for only team gaming event.*<br />
 <br /><br />
      </div>
    ),
  },
  {
    eventName: 'Mini Militia',
    eventDetailSummary:
      '1v1 matches. Knock out matches. Tournament mode.',
    eventDetail: (
      <div>
        1. 1v1 matches.<br />
2. Knock out matches.<br />
3. Tournament mode.<br />
4. Headphones/Earphones are
mandatory.<br /><br />
 *Rs.600 per team for only team gaming event.*<br />
 <br /><br />
      </div>
    ),
  },
  {
    eventName: 'Clash Royale',
    eventDetailSummary:
      '1v1 quick matches. Knock out matches. Tournament mode.',
    eventDetail: (
      <div>
       1. 1v1 quick matches.<br />
2. Knock out matches.<br />
3. Tournament mode.<br />
4. 6-10min/match.<br />
5. Only latest version and non-hacked and
non-mode are allowed.<br />
6. Headphones/Earphones are mandatory.<br /><br />
 *Rs.600 per team for only team gaming event.*<br />
 <br /><br />
      </div>
    ),
  },
];
const PhotoEventDetails = [
  {
    eventName: 'Campus Clicks',
    eventDetailSummary:
      'Theme for the competition will be given then and there during the event itself and must be taken by the participant at university on the same day and within the stipulated time.',
    eventDetail: (
      <div>
        1. Theme for the competition will be given then and there during the event itself and must be
taken by the participant at university on the same day and within the stipulated time.<br />
2. Participants can use and DSLR or phone camera for the given theme to be captured.<br />
3. Simple lightening and contrast adjustments are allowed. Digitally composed or edited
images will be disqualified.<br />
4. Participants must carry their Photo I.D. issued by competent authority (such as College
I.D.,PAN, Aadhar etc.) in original, which must be presented before the organizers while -
submitting the photograph.<br />
5. The caution should be taken to refrain from displaying obscenity, violence,
prejudice,defamation etc.<br />
6. Film submitted previously to any other festival will not be considered for this contest and if
found later will be disqualified.<br />
7. Submission should have accurate caption, in ENGLISH ONLY, with the participants name
in the e-mail.<br />
8. Participants must bring their own kit and equipment (Tripod, Card Reader etc.)<br />
9. Decision of the judges will be final and binding.
<br /><br />
      </div>
    ),
  },
  {
    eventName: 'Theme Photography – Open Theme',
    eventDetailSummary:
      ' It must be an original work that does not contain, incorporate or otherwise use any content,material or element that is owned by a third party or entity.',
    eventDetail: (
      <div>
        1. It must be an original work that does not contain, incorporate or otherwise use any
content,material or element that is owned by a third party or entity.<br />
2. Participants must mention the theme of the photo during the time of entry.<br />
3. Photos with the theme of ‘Campus’ will automatically be shifted to the other event of the
Photography Society, i.e., Campus Clicks.<br />
4. Photograph submitted previously to any other festival will not be considered for this contest
and if found later will be disqualified.<br />
5. The caution should be taken to refrain from displaying obscenity, violence,
prejudice,defamation etc.<br />
6. Digitally composed or edited images will be disqualified. (Basic color grading is allowed)<br />
7. Participants must carry their Photo I.D. issued by competent authority (such as College
I.D.,PAN, Aadhar etc.) in original, which must be presented before the organizers while
submitting the photograph.<br />
8. Submission should have accurate caption, in ENGLISH ONLY, with the participants name
inthe e-mail.<br />
9. Participants must bring their own kit and equipment (Props, Card Reader etc.)<br />
10. Decision of the judges will be final and binding.<br />
<br /><br />
      </div>
    ),
  },
  
];

export { musicEventDetails, dramaEventDetails, ArtsoloEventDetails, ArtgroupEventDetails, danceEventDetails, FashionEventDetails, LiteraryEventDetails, gamingcontrollerEventDetails, gamingretroEventDetails, gamingpcEventDetails, gamingmobileEventDetails, PhotoEventDetails };
