import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import { FullFlower, FlowerGrid } from './flower';
import { MainName, SubHead, Activity, 
         NavSect, Contact, Footer } from './text';
import ismrm from "./file/ismrm-submission.pdf";
import oarsi from "./file/oarsi-submission.pdf";

function App() {
  return (
    <Main />
  )
}

function Main() {
  return (
    <div>
      <NavSect />
      <FrontSect />
      <ActivitiesSect />
      <ContactSect />
      <Footer />
    </div>
  )
}

function FrontSect() {
  return(
    <div className="main-container">
      <div className="flower-container center-both">
        <FlowerGrid n={12}/>
      </div>
      <MainName/>
      <SubHead/>
    </div>
  )
}

function ActivitiesSect() {
  return(
    <div className="activity-container center-horizontal">
      <div className="activity-col">
        <div className="heading2 uppercase">Projects</div>
        <Activity 
          title="Empyrean"
          link="https://github.com/amyxlase/Project-Sapphire"
          desc="MMO game developed with CMU Game Creation Society"/>
        <Activity 
          title="Music Day"
          link="activities/musicday"
          desc="Generative background music application"/>
        <Activity 
          title="Statistical Shape Modeling of Knee Menisci"
          link={oarsi}
          desc="Ongoing research project at UCSF"/>
        <Activity 
          title="Deep Learning and Brain Imaging"
          link={ismrm}
          desc="Summer research project at UCSF"/>
        <Activity 
          title="Jazzcats"
          link="/activities/jazzcats"
          desc="Exciting iOS game about jazz and cats"/>
      </div>
      <div className="activity-col">
        <div className="heading2 uppercase">Fun</div>
          <Activity 
            title="Music"
            link="/activities/music"
            desc="Recordings + compositions"/>
          <Activity 
            title="Crochet"
            link="/activities/crochet"
            desc="Cute animals and foods"/>
          <Activity 
            title="Art"
            link="/activities/art"
            desc="Drawing things I like"/>
          <Activity 
            title="Archive"
            link="/activities/archive"
            desc="Projects from the past"/>
      </div>
    </div>
  )
}

function ContactSect() {
  return(
    <Contact />
  )
}


export default App;
