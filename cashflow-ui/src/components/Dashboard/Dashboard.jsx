"use client";
import { Image, Box,Center, useMediaQuery } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import CashBot from "../Cashbot/Cashbot";
import { useEffect, useState } from 'react';

export default function Dashboard({ cashBotLink, dashboard}) {
  // TODO: Separate beginner & intermediate dashboard 

  const [media, heightMedia] = useMediaQuery(["(max-width: 694px)", "(max-height: 915px)"])
  let dashboard = []
 console.log("height", heightMedia)
 console.log("media", media)
  if (appState.user.status === "Beginner")
    dashboard = ["bank-acct", "credit-cards", "debt"];
  else if (appState.user.status === "Intermediate")
    dashboard = ["hysavings", "cdsavings", "roth", "401k"];

  return (
    <>

<Box height={"80vh"}>
    <Box marginTop={`${heightMedia && media ? ("60%") : (null)}`} display={'flex'} alignItems={`${media ? ("center"): (null)}`} flexDir={`${media ? ("column") : ("row")}`} justifyContent={'center'} height={'50vh'}>
    {dashboard.map((img) =>(
      <Box>
        <Link to={`/${img}`} >
        <Image objectFit={"cover"} boxSize={300} key={img} src={`${img}.png`}></Image>
        </Link>
        </Box>
    ))}
    </Box>
     <Box display={(media) && ("none") } height={"50vh"}>
          <Center>
            <Image src="cashflowcloud.png" marginTop={"-10%"} />
          </Center>

        </Box>
    </Box>
        <CashBot cashBotLink={cashBotLink}/>
    </>
  );
}
