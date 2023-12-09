import Style from './Home.module.scss';
import me from '../../img/self.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";
import {info} from "../../info/Info";
import Resume from "./Resume";
import React, { useEffect, useState } from 'react';
import FadeIn from '../FadeIn';
import Loader from "../Loader"


export default function Home() {

   const [backgroundColor, setBackgroundColor] = useState("#E98074");

   useEffect(() => {
     const intervalId = setInterval(() => {
       setBackgroundColor("#E85A47");
       setTimeout(() => {
         setBackgroundColor("#E98074");
       }, 2000);
     }, 4000);
 
     return () => clearInterval(intervalId); // Cleanup on component unmount
   }, []);

   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
       setLoading(false);
     }, 2300);
 
     return () => clearTimeout(timer);
   }, []);

   return (
      <div>
      {loading ?<Loader/>: (
      <FadeIn>
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
         <Box className={classNames(Style.avatar, Style.shadowed, Style.background)} style={{ backgroundColor }} alt={'image of developer'} component={'img'} src={me} width={{xs: '35vh', md: '40vh'}}
              height={{xs: '35vh', md: '40vh'}}
              borderRadius={'50%'} p={'0.75rem'} mb={{xs: '1rem', sm: 0}} mr={{xs: 0, md: '2rem'}}/>
         <Box>
            <h1>Hi, I'm <span className={Style.name}>{info.firstName}</span><span className={Style.hand}>🤚</span>
            </h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text}/>
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} fontSize={{xs: '2.5rem', md: '2.5rem'}}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
                  <Resume/>
            </Box>
         </Box>
      </Box>
      </FadeIn>
      
       )}
      </div>
   )
}