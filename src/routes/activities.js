import { useEffect } from 'react';

import { NavSect, H1, H2, BodyText,
  BodyImage, ImageCaption, SimpleLink,
  HeaderCaption, Footer } from '../text';

// crochet js
import seahorse from '../img/crochet-img/seahorse.jpg';
import teapot from '../img/crochet-img/teapot.jpg';
import lemon from '../img/crochet-img/lemon.jpg';
import giraffe from '../img/crochet-img/giraffe.jpg';
import hippo from '../img/crochet-img/hippo.jpg';
import cupcake from '../img/crochet-img/cupcake.jpg';
import donut from '../img/crochet-img/donut.jpg';
import corn from '../img/crochet-img/corn.jpg';
import dumpling from '../img/crochet-img/dumpling.jpg';
import egg from '../img/crochet-img/egg.jpg';
import peas from '../img/crochet-img/peas.jpg';
import seal from '../img/crochet-img/seal.jpg';
import snowowl from '../img/crochet-img/snowowl.jpg';

export function MusicDay() {
  useEffect(() => {
    window.location.href = "http://musicday.emily.xie.fm";  }, []);
  
  return(<div>Redirect to http://musicday.emily.xie.fm</div>);
}

export function Jazzcats() {
  useEffect(() => {
    window.location.href = "http://jazzcats.emily.xie.fm";  }, []);
  
  return(<div>Redirect to http://musicday.emily.xie.fm</div>);
}

export function Crochet() {
  return (
    <div>
    <NavSect />
    <H1>Crochet</H1>
    <HeaderCaption>When I have free time, I like to crochet. Here's the amigurumi family :).</HeaderCaption>
    <BodyImage src={seahorse} />
    <BodyImage src={teapot} />
    <BodyImage src={lemon} />
    <BodyImage src={giraffe} />
    <BodyImage src={hippo} />
    <BodyImage src={cupcake} />
    <BodyImage src={donut} />
    <BodyImage src={corn} />
    <BodyImage src={dumpling} />
    <BodyImage src={egg} />
    <BodyImage src={peas} />
    <BodyImage src={seal} />
    <BodyImage src={snowowl} />
    <Footer />
    </div>
  );
}

export function Music() {
  return (
    <div>
    <NavSect />
    <H1>Music</H1>
    <HeaderCaption>Performance + Production</HeaderCaption>
    <BodyText>
      I like music! My main instrument is the alto saxophone, although I have also 
      played a bit of piano, flute, and clarinet. Up to now, I've played music for 
      over 10 years, and since joining jazz band, jazz has been my favorite music genre.{"\n"}
      Awards and recognitions that I've received include placement 
      into the 2020 California All-State Concert Band, Superior Command Performances in the 
      CMEA Solo &amp; Ensemble Festivals, and placement into the Contra Costa County honor 
      jazz band.
    </BodyText>
    <BodyText>
      Also, I've recently become interested in music production. Spotify EP coming soon.
    </BodyText>
    </div>
  );
}