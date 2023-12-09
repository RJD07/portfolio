import React, { useEffect, useState } from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";
import FadeIn from '../FadeIn';
import Loader from "../Loader"

export default function Portfolio() {

    
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
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid className="yeah" item xs={12} md={6} key={index}>
                       <PortfolioBlock  image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
        </FadeIn>
      
      )}
     </div>
    );
};