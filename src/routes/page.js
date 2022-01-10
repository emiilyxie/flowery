import { NavSect, H1, H2, BodyText,
         BodyImage, ImageCaption, SimpleLink,
         HeaderCaption, Footer } from '../text';
import shinji from '../img/shinjimusic.jpeg';
import profile from '../img/profile.JPG';

export function Template() {
  return (
    <div>
      <NavSect />
      <H1>Template</H1>
      <HeaderCaption>A template for in-website pages.</HeaderCaption>
      <BodyText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla risus dui, tempus tincidunt tempor nec, rhoncus nec magna. Duis tincidunt lectus lectus, ut pretium nibh scelerisque ac.
      </BodyText>
      <BodyText>
        Nullam vulputate velit a libero semper, condimentum mattis sem ullamcorper. Duis ut mauris at urna sodales dapibus auctor in est. Cras sit amet nulla nisi.
      </BodyText>
      <BodyImage src={shinji} />
      <ImageCaption>Look, it's Shinji.</ImageCaption>
      <BodyText>
        Anyways, as of now (1/7/2022) I watched some <SimpleLink href="https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion">Evangelion</SimpleLink> and
        it was pretty enjoyable.
      </BodyText>
      <BodyText>
        This concludes the template!
      </BodyText>
      <Footer />
    </div>
  );
}

export function About() {
  return (
    <div>
      <NavSect />
      <H1>About</H1>
      <HeaderCaption>A brief summary.</HeaderCaption>
      <BodyText>
        Hi there! I'm Emily Xie, a first-year student at CMU studying Information Systems.
        I love coding applications, both practical and for fun. My current
        technological interests include generative AI/ML, web development, and 
        computer graphics.
      </BodyText>
      <BodyText>
        In my free time, I generally listen to boppin' jazz albums or crochet cute foods &amp; animals.
      </BodyText>
      <BodyImage src={profile} />
      <ImageCaption>I am also an avid water drinker.</ImageCaption>
      <Footer />
    </div>
  );
}

export function ComingSoon() {
  return (
    <div>
      <NavSect />
      <H1>Coming Soon!</H1>
      <HeaderCaption>
        Content is not here yet, but will be coming soon!
      </HeaderCaption>
      <Footer />
    </div>
  );
}