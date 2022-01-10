import React from "react";
import { Link, Outlet } from "react-router-dom";
import resume from "./file/emilyxie-resume-s22.pdf";


function MainName() {
  return (
    <div className="main-name center-both">
      Emily<br/>Xie
    </div>
  );
}

function SubHead() {
  return (
    <div className="sub-head center-horizontal">
      Information Systems @ Carnegie Mellon
    </div>
  );
}

function Activity(props) {
  return (
    <div className="activity">
      <div className="title"><Link className="underline--magical" to={props.link}>{props.title}</Link></div>
      <div className="desc">{props.desc}</div>
    </div>
  );
}

function NavSect() {
  return(
    <div className="nav-wrapper uppercase">
      <NavMain/>
      <NavExtra/>
    </div>
  )
}

function NavMain() {
  return (
    <div className="nav left">
      <NavEntry title="Emily" link="/" />
    </div>
  )
}

function NavExtra() {
  return(
    <div className="nav right">
      <NavEntry title="About" link="/about"/>
      <SimpleLink href={resume}>Resume</SimpleLink>
    </div>
  )
}

function NavEntry(props) {
  return (
    <Link to={props.link} className="nav-entry underline--magical">
      {props.title}
    </Link>
  )
}

function Contact() {
  return (
    <div>
      <div className='main-content uppercase'>
        <H2>Contact</H2>
      </div>
      <BodyText>Email | elx@andrew.cmu.edu</BodyText>
      <BodyText>Github | <SimpleLink href="https://github.com/emiilyxie">@emiilyxie</SimpleLink></BodyText>
    </div>
  )
}

function H1(props) {
  return(
    <div className="heading1 uppercase">
      {props.children}
    </div>
  )
}

function H2(props) {
  return(
    <div className="heading2">
      {props.children}
    </div>
  )
}

function HeaderCaption(props) {
  return(
    <div className="header-caption">
      {props.children}
    </div>
  )
}

function BodyText(props) {
  return(
    <div className="body-text display-linebreak main-content">
      {props.children}
    </div>
  )
}

function BodyImage(props) {
  return(
    <img className="body-image center-horizontal" src={props.src}></img>
  )
}

function ImageCaption(props) {
  return(
    <div className="image-caption center-horizontal">
      {props.children}
    </div>
  )
}

function SimpleLink(props) {
  return(
    <a href={props.href} className="underline--magical" target="_blank">
      {props.children}
    </a>
  )
}

function Footer() {
  return(
    <div className="footer" />
  )
}

export { MainName, SubHead, Activity, NavSect, Contact,
         H1, H2, HeaderCaption, BodyText, BodyImage, ImageCaption,
         SimpleLink, Footer };