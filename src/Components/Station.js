import React from 'react'
import { Hero, HeroBanner, ScoreCard, ChannelValue } from '@pxblue/react-components/core';
import { List, ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { MoreVert, ChevronRight } from '@material-ui/icons';
import backGroundImage from '../Assets/images/headerImage.jpg'
import Grid from '@material-ui/core/Grid';
import Config from '../Utilities/Config'
import Classes from './Station.module.css'
import * as ColorBrands from '@pxblue/colors-branding'
import Stationdata from '../Utilities/Stationdata.json'
import EmptyState from '@pxblue/react-components/core/EmptyState';



// Card Footer maintained in object structure in order to re use
const Footer = (
    <List>
        <ListItem>
            <ListItemText primary="View Location" />
            <ListItemSecondaryAction> <ChevronRight /></ListItemSecondaryAction>
        </ListItem>
    </List>
)
const Station = () => {

    return Stationdata.map((station, index) => {
        const stationValues = station['values']['temperature'] ? true : false;
        const isAlarm = station['alarmCount'] > 0 ? true : false;
        const isEvent = station['eventCount'] > 0 ? true : false;

        console.log(isAlarm)
        return (
            <Grid key={index} item md={6} lg={4} xs={12} sm={6} className={Classes.singleCard}>
                <ScoreCard
                    headerColor={
                        isAlarm ? ColorBrands.crimson['600']
                            : Colors.lightBlue['500']
                    }
                    headerTitle={station.title}
                    headerSubtitle={station.subtitle}
                    headerInfo={station.deviceCount === null ? 'No Devices Connected' : `${station.deviceCount} Devices`}
                    headerBackgroundImage={backGroundImage}
                    headerFontColor={Colors.white[50]}
                    actionItems={[
                        <MoreVert onClick={() => { }} />,
                    ]}
                    badge={

                        <HeroBanner>
                            {station.subtitle !== 'Disconnected' ? <div className={Classes.main}>
                                <div className={Classes.channelValues}>
                                    <ChannelValue color={isAlarm ?
                                        Config.alarm.color
                                        : Config.alarms.color
                                    } icon={isAlarm ?
                                        Config.alarm.icon
                                        : Config.alarms.icon
                                    }
                                        value={isAlarm ?
                                            Config.alarm.label
                                            : Config.alarms.label
                                        } />
                                    <ChannelValue value={isEvent ?
                                        `${station.eventCount} ${Config.event.label}`
                                        : Config.events.label}
                                        color={isEvent ?
                                            Config.event.color :
                                            Config.events.color}
                                        icon={Config.event.icon}
                                    />
                                    <ChannelValue icon={Config.status.icon} value={Config.status.label} />
                                </div>

                                <div className={Classes.heroValues}>
                                    <Hero
                                        icon={stationValues ? Config.Temperature.icon : Config.Flow.icon}
                                        label={stationValues ? Config.Temperature.label : Config.Flow.label}
                                        iconSize={48}
                                        value={stationValues ? station.values.temperature : station.values.flow}
                                        units={stationValues ? Config.Temperature.units : Config.Flow.units}
                                        fontSize={'normal'}
                                    />
                                    <Hero
                                        icon={stationValues ? Config.Humidity.icon : Config.Volume.icon}
                                        label={stationValues ? Config.Humidity.label : Config.Volume.label}
                                        iconSize={48}
                                        value={stationValues ? station.values.humidity : station.values.volume}
                                        units={stationValues ? Config.Humidity.units : Config.Volume.units}
                                        fontSize={'normal'}
                                    />
                                </div>

                            </div> : null}


                        </HeroBanner>
                    }
                    actionRow={Footer}
                >
                    {station.subtitle === 'Disconnected' ? <div className={Classes.noData}>
                        <EmptyState
                            icon={Config.noData.icon}
                            title={"No Alarms Found"}
                        />
                    </div> : null}

                </ScoreCard>
            </Grid >
        );
    }
    )
};
export default Station;
