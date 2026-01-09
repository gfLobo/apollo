import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import images from "../../Jsons/Images.json"
import MasonryLayoutV2 from '../MasonryLayout/MasonryLayoutV2';

//Styles
import styles from "./Timeline.module.css"







export default function TimelineX() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    const timelineData = [
        {
            "date": "May 25, 1961",
            "title": "President Kennedy commit the United States to landing astronauts on the moon",
            "description": "President John F. Kennedy told Congress: “I believe that this nation should commit itself to achieving the goal, before this decade is out, of landing a man on the moon and returning him safely to the earth.”",
            "patch": "apolloProgram.png",
            "landing": false,
            "video": "89wezjx11dQ",
            "objects": [],
            "images": []
        },
        {
            "date": "Sep 12, 1962",
            "title": "“Why go to the moon?” - John F. Kennedy at Rice University",
            "description": "",
            "patch": "",
            "landing": false,
            "video": "QXqlziZV63k",
            "objects": [],
            "images": []

        },
        {
            "date": "Jan 27, 1967",
            "title": "Apollo 1",
            "description": "Originally called Apollo Saturn-204, Apollo 1 mission never flew. A cabin fire during a launch rehearsal test killed all three crew members—Command Pilot Gus Grissom, Senior Pilot Ed White, and Pilot Roger B. Chaffee—and destroyed the command module (CM).",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/3/35/Apollo_1_patch.png",
            "landing": false,
            "video": "",
            "objects": [],
            "images": images.categories.apollo1
        }, {
            "date": "Sep 11, 1967",
            "title": "The Unmanned flights",
            "description": "Lunar lander Surveyor 5 made a soft landing on the Moon in the Mare Tranquillitatis (Sea of Tranquility) at 00:46 UTC (launched September 10, U.S. at 7:46 p.m. Eastern time) and began transmitting information back to Earth.",
            "patch": "",
            "landing": true,
            "video": "",
            "objects": [],
            "images": []
        }, {
            "date": "Oct 11-22, 1967",
            "title": "Apollo 7",
            "description": "First crewed flight in NASA's Apollo program, also the first live television broadcast from an American spacecraft. The crew: Walter Schirra, Jr., Donn Eisele, and Walter Cunningham.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/2/20/Apollo7.png",
            "landing": false,
            "video": "16_hKZZKAgg",
            "objects": [
                {
                    title: "3D Earth",
                    src: "https://eyes.nasa.gov/apps/orrery/#/earth"
                }
            ],
            "images": images.categories.apollo7
        }, {
            "date": "Dec 21-27, 1968",
            "title": "Apollo 8",
            "description": "Command and service module manned flight demonstration in lunar orbit. The first crewed mission on the Moon's Orbit. The astronauts William Anders, Frank Borman, and James Lovell, Jr spent 6 days, 3 hours, and 42 seconds in space. Apollo 8 completed 10 orbits around Earth, traveling 579,606.9 miles.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Apollo-8-patch.png",
            "landing": false,
            "video": "Wfd0oC3eFWw",
            "objects": [
                {
                    title: "Apollo command and service module",
                    src: "https://sketchfab.com/models/a5409ad2baa74279ba07e4f5e034aac8/embed"
                }
            ],
            "images": images.categories.apollo8
        }, {
            "date": "Mar 3-13, 1969",
            "title": "Apollo 9",
            "description": "Testing the operability of all the equipment in low Earth orbit to perform the maneuvers involved in the ultimate mission. The crew were Commander James McDivitt, Command Module Pilot David Scott, and Lunar Module Pilot Rusty Schweickart.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Apollo_9_mission_patch.png",
            "landing": false,
            "video": "hG6lWYAFeCQ",
            "objects": [
                {
                    title: "Apollo Lunar Module",
                    src: "https://sketchfab.com/models/14c9489460894e2799f3364bdacdd74f/embed"
                }
            ],
            "images": images.categories.apollo9
        }, {
            "date": "Mai 18-26, 1969",
            "title": "Apollo 10",
            "description": "A rehearsal flight, intended to test all spacecraft components and procedures short of actual descent and landing. On the crew: Commander (CDR)	Thomas P. Stafford, Command Module Pilot (CMP)	John W. Young, Lunar Module Pilot (LMP)	Eugene A. Cernan",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/6/64/Apollo-10-LOGO.png",
            "landing": false,
            "video": "Rq8cyvmJMNQ",
            "objects": [
                {
                    title: "Saturn V Rocket",
                    src: "https://sketchfab.com/models/4e33a2eb32d04f7c8d7556003040358f/embed"
                }, {
                    title: "Moon sites educational model",
                    src: "https://sketchfab.com/models/870de693475d436c8e925ab0bcda4ca4/embed"
                }
            ],
            "images": images.categories.apollo10
        }, {
            "date": "Jul 16-24, 1969",
            "title": "Apollo 11",
            "description": "The first landed humans on the Moon on July 21 at 02:56 UTC, south-western corner of the dark lunar plain Mare Tranquillitatis (“Sea of Tranquility”). On the crew: Commander	Neil A. Armstrong, Command Module Pilot	Michael Collins, Lunar Module Pilot	Edwin “Buzz” E. Aldrin Jr.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Apollo_11_insignia.png/375px-Apollo_11_insignia.png",
            "landing": true,
            "video": "nOcDftgR5UQ",
            "objects": [
                {
                    title: "Apollo 11 Lunar Landing Site",
                    src: "https://sketchfab.com/models/2c8be4af648447569a90cc67ef5c83f1/embed"
                }, {
                    title: "United States Spacesuit (IVA Setup)",
                    src: "https://sketchfab.com/models/d64f698b5ae84783974d97eb981c138c/embed"
                }
            ],
            "images": images.categories.apollo11
        }, {
            "date": "Nov 14-24, 1969",
            "title": "Apollo 12",
            "description": "Crew: Charles Conrad Jr., Commander Alan L. Bean, Lunar Module Pilot Richard F. Gordon Jr., Command Module Pilot. The primary mission objectives of the second crewed lunar landing included an extensive series of lunar exploration tasks by the lunar module, or LM, crew, as well as the deployment of the Apollo Lunar Surface Experiments Package, or ALSEP, which was to be left on the moon's surface to gather seismic, scientific and engineering data throughout a long period of time.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/8/8d/Apollo_12_insignia.png",
            "landing": true,
            "video": "l11sW5KOi_g",
            "objects": [
                {
                    title: "Apollo 12 Lunar Landing Site",
                    src: "https://sketchfab.com/models/65e5e7ca5c00463b81dce7200ed3cd53/embed"
                },
            ],
            "images": images.categories.apollo12
        }, {
            "date": "Apr 11-17, 1970",
            "title": "Apollo 13",
            "description": "Crew: Commander (CDR) James Lovell, Jr., Lunar Module Pilot (LMP) Fred Haise, Jr., and Command Module Pilot (CMP) Jack Swigert. They spent 5 days, 22 hours, 54 minutes, and 41 seconds in space, the lunar landing was aborted after an oxygen tank in the service module (SM) failed two days into the mission.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Apollo_13-insignia.png/800px-Apollo_13-insignia.png",
            "landing": false,
            "video": "MdvoA-sjs0A",
            "objects": [
                {
                    title: "Hasselblad 500 EL",
                    src: "https://sketchfab.com/models/ccf68a4144494193b11adac641f9b8bc/embed"
                },{
                    title: "Apollo Command Module Interior Sphere Projection",
                    src: "https://sketchfab.com/models/b64f6007aa754cd296f3417a3a6f57ee/embed"
                },
            ],
            "images": images.categories.apollo13
        },{
            "date": "Jan 31-Feb 9, 1971",
            "title": "Apollo 14",
            "description": "Crew: Alan B. Shepard Jr., Commander, Edgar D. Mitchell, Lunar Module Pilot, Stuart A. Roosa, Command Module Pilot. The primary objectives of this mission were to explore the Fra Mauro region centered around deployment of the Apollo Lunar Surface Scientific Experiments Package, or ALSEP; lunar field geology investigations; collection of surface material samples for return to Earth.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Apollo_14-insignia.png",
            "landing": true,
            "video": "l7MMTm1-DAA",
            "objects": [
                {
                    title: "Sources AS14-68-9472 AS14-68-9473 AS14-68-9474 AS14-68-9475 AS14-68-9476",
                    src: "https://sketchfab.com/models/08a8fbdc4def47fe93ce478b7ec19d81/embed"
                },{
                    title: "Alan Shepard golf club",
                    src: "https://sketchfab.com/models/3269cae769e745a9a3ad95318e08c520/embed"
                },
            ],
            "images": images.categories.apollo14
        },{
            "date": "Jul 15—August 7, 1971",
            "title": "Apollo 15",
            "description": "Crew: Commander	David R. Scott, Command module pilot (CMP)	Alfred M. Worden, Lunar module pilot (LMP)	James B. Irwin. There were four primary objectives falling in the general categories of lunar surface science, lunar orbital science and engineering-operational. The mission objectives were to explore the Hadley-Apennine region, set up and activate lunar surface scientific experiments, make engineering evaluations of new Apollo equipment, and conduct lunar orbital experiments and photographic tasks.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Apollo_15-insignia.png/800px-Apollo_15-insignia.png",
            "landing": true,
            "video": "xhLkDOEPWzA",
            "objects": [
                {
                    title: "Hole on the moon made by the Astronaut David Scott during the first EVA activity",
                    src: "https://sketchfab.com/models/62694215e392459b92820690cde85f83/embed"
                },{
                    title: "Apollo Lunar Rover Moon Car",
                    src: "https://sketchfab.com/models/bef2062726c8448f8ebe935c690f633a/embed"
                },
            ],
            "images": images.categories.apollo15
        },{
            "date": "Apr 16–27, 1972",
            "title": "Apollo 16",
            "description": "Crew: John W. Young Commander,Charles M. Duke Jr. Lunar Module Pilot, Thomas K. Mattingly II Command Module Pilot. Three primary objectives were (1) to inspect, survey, and sample materials and surface features at a selected landing site in the Descartes region; (2) emplace and activate surface experiments; and (3) conduct in-flight experiments and photographic tasks from lunar orbit. Additional objectives included performance of experiments requiring zero gravity and engineering evaluation of spacecraft and equipment.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/6/66/Apollo-16-LOGO.png",
            "landing": true,
            "video": "SgYrj5zJAKQ",
            "objects": [
                {
                    title: "Apollo Heavier Weight Hammer",
                    src: "https://sketchfab.com/models/79747244f1914413beb9f0f35bba904a/embed"
                },{
                    title: "North Rim Crater",
                    src: "https://sketchfab.com/models/c9b5e5020ff4445a80006b517dd34a35/embed"
                },
            ],
            "images": images.categories.apollo16
        },{
            "date": "December 7–19, 1972",
            "title": "Apollo 17",
            "description": "Crew: Eugene A. Cernan Commander, Harrison H. Schmitt Lunar Module Pilot, Ronald E. Evans, Command Module Pilot. Scientific objectives of the Apollo 17 mission included, geological surveying and sampling of materials and surface features in a preselected area of the Taurus-Littrow region; deploying and activating surface experiments; and conducting in-flight experiments and photographic tasks during lunar orbit and transearth coast.",
            "patch": "https://upload.wikimedia.org/wikipedia/commons/7/76/Apollo_17-insignia.png",
            "landing": true,
            "video": "MvVxtFyTE0M",
            "objects": [
                {
                    title: "Reconstruction of Boulder 1, sampled at Station 2 by Apollo 17",
                    src: "https://sketchfab.com/models/61988d6926d648ba99c0cd9664de4b7b/embed"
                },{
                    title: "Apollo 17 Landing Site",
                    src: "https://sketchfab.com/models/e51b3ff6a40e47baad0319d9634ab162/embed"
                },
            ],
            "images": images.categories.apollo17
        }
    ]


    return (
        <Timeline position="alternate" >
            <TimelineItem sx={{ alignContent: "center", alignItems: "center" }}>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="h5"
                    color="white"
                >
                    Jul 29, 1958
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot sx={{ backgroundColor: "transparent" }}>
                        <img src='/nasa-logo.png' style={{ width: "auto", height: 80 }} />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Stack
                        spacing={2}
                        divider={<Divider color='white' />}
                    >
                        <Typography variant="h5" component="span" color="#96e1ea" sx={{ width: "100%", fontWeight: "bold" }}>
                            NASA was founded
                        </Typography>
                        <Typography color="white" variant='caption'>
                            {"President Dwight D. Eisenhower signed the National Aeronautics and Space Act of 1958 establishing NASA an independent agency of the U.S. federal government responsible for the civil space program, aeronautics research, and space research."}
                        </Typography>
                    </Stack>
                </TimelineContent>
            </TimelineItem>
            {timelineData.map((data) => {

                return (
                    <TimelineItem sx={{ height: "100%", minHeight: 350 }} >
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="h5"
                            color="white"
                        >
                            {data.date}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot sx={{ backgroundColor: data.landing ? "transparent" : "" }}>
                                {data.landing ?
                                    <img src={"moon.png"}
                                        style={{ width: "auto", height: 45 }} />
                                    :
                                    <></>
                                }
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2, marginTop: 15 }}>
                            <Stack
                                spacing={2}
                                divider={<Divider color='white' />}
                            >
                                <Stack direction={"row"} spacing={2} sx={{ alignItems: "center" }}>
                                    <Typography  component="span" color="#96e1ea" sx={{ width: "100%", fontWeight: "bold", fontSize:"150%" }}>
                                        {data.title}
                                    </Typography>
                                    {data.patch.length > 0 ? <img src={data.patch} width={"auto"} height={80} /> : <></>}
                                </Stack>

                                <Stack
                                    spacing={2}
                                >
                                    <Typography color="white" variant='caption'>
                                        {data.description}
                                    </Typography>
                                    {data.video.length > 0 ?
                                        <iframe
                                            width={"100%"}
                                            height={350}
                                            src={`https://www.youtube.com/embed/${data.video}?si=iyFQqn65n8D7JGIh`}
                                            title={data.title}
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                        /> : <></>
                                    }
                                    {data.objects.length > 0 ?
                                        <>
                                            {data.objects.length > 1 ?
                                                <ul className={styles["tdModules"]}>
                                                    {data.objects.map((obj) => {
                                                        return (
                                                            <iframe
                                                                name={obj.title}
                                                                src={obj.src}
                                                                width="50%"
                                                                height="250"
                                                                webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                                                            />
                                                        )
                                                    })}
                                                </ul>
                                                :
                                                <div className={styles['tdModules']}>
                                                    {data.objects.map((obj) => {
                                                        return (
                                                            <iframe
                                                                name={obj.title}
                                                                src={obj.src}
                                                                width="100%"
                                                                height="250"
                                                                webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share
                                                            />
                                                        )
                                                    })}
                                                </div>
                                            }
                                        </>
                                        :
                                        <></>
                                    }
                                    {data.images.length > 0 ?
                                        <Accordion style={{ backgroundColor: "transparent", marginTop: 25 }}
                                            expanded={expanded === data.title}
                                            onChange={handleChange(data.title)}
                                        >
                                            <AccordionSummary
                                                expandIcon={<ExpandMoreIcon sx={{ color: expanded === data.title ? "#0091ff" : "black" }} />}
                                                id={`${data.title} Photos`}
                                                style={{ border: "4px solid #0091ff", borderRadius: 15, backgroundColor: expanded === data.title ? "transparent" : "#0091ff" }}
                                            >
                                                <Typography sx={{ color: expanded === data.title ? "#0091ff" : "black", fontWeight: "bold" }} variant='body1'>Photos</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails style={{ maxHeight: 400, overflowY: 'scroll' }}>
                                                <MasonryLayoutV2 images={data.images} />
                                            </AccordionDetails>
                                        </Accordion>
                                        : <></>
                                    }

                                </Stack>
                            </Stack>
                        </TimelineContent>
                    </TimelineItem>
                )
            })}
        </Timeline>
    );
}
