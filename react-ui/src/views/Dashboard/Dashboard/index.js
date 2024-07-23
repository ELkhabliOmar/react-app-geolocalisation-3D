/* // Chakra imports
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import LineChart from "components/Charts/LineChart";

import { FaBuilding } from "react-icons/fa";

// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { dashboardTableData, timelineData } from "variables/general";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<FaBuilding h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Flex flexDirection='column' pt={{ base: "120px", md: "10px" }}>
      <iframe 
        width='100%' 
        height='600px'  // Increased height
        src="https://api.mapbox.com/styles/v1/saadfrh/clxszs0bc00rj01qr7142emqi.html?title=false&access_token=pk.eyJ1Ijoic2FhZGZyaCIsImEiOiJjbHZkdnlrajkwMjl6MmtvNWNxazYwNzZ1In0.XIuSvjAjqxkPVKQZy0R5rw&zoomwheel=false#12.92/32.23409/-7.94318/348" 
        title="ben_guerir_3d" 
        style={{ border: 'none' }}
      />
    </Flex>
    </Flex>
    
  );
}

 */

// Dashboard.js

import React from 'react';
import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBuilding } from "react-icons/fa";
import { CartIcon, DocumentIcon, GlobeIcon, WalletIcon } from "components/Icons/Icons.js";
import ActiveUsers from "./components/ActiveUsers";
import BuiltByDevelopers from "./components/BuiltByDevelopers";
import MiniStatistics from "./components/MiniStatistics";
import OrdersOverview from "./components/OrdersOverview";
import Projects from "./components/Projects";
import SalesOverview from "./components/SalesOverview";
import WorkWithTheRockets from "./components/WorkWithTheRockets";
import MapboxMap from './MapComponent';

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
   {/*     <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px'>
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<FaBuilding h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid> */} 
      <Flex flexDirection='column' pt={{ base: "120px", md: "2px" }} mb={{ base: "2px", md: "2px" }}>
        <MapboxMap />
     // </Flex>
      <div id="legend" style={{ position: 'absolute', bottom: '30px', left: '10px', background: 'white', padding: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', fontFamily: 'Arial, sans-serif', fontSize: '12px', color: '#333' }}>
        <h4>Building Heights</h4>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#a4b000' }}></span>0-10 meters</div>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#E8553D' }}></span>10-20 meters</div>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#e75805' }}></span>20-30 meters</div>
        <div><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '5px', backgroundColor: '#620033' }}></span>30+ meters</div>
      </div>
    </Flex>
  );
}

/* 

import React from "react";
import {
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import MiniStatistics from "./components/MiniStatistics";
import MapComponent from "./components/MapComponent";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
        <MiniStatistics
          title={"Today's Moneys"}
          amount={"$53,000"}
          percentage={55}
          icon={<WalletIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Today's Users"}
          amount={"2,300"}
          percentage={5}
          icon={<GlobeIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"New Clients"}
          amount={"+3,020"}
          percentage={-14}
          icon={<DocumentIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <MiniStatistics
          title={"Total Sales"}
          amount={"$173,000"}
          percentage={8}
          icon={<CartIcon h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
      <Flex flexDirection="column" pt={{ base: "120px", md: "10px" }}>
        <MapComponent />
      </Flex>
    </Flex>
  );
}
 */