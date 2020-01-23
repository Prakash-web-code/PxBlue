import React from 'react'
import { Temp, Moisture, Flow, GasCylinder } from '@pxblue/icons-mui'
import * as Colors from '@pxblue/colors';
import * as ColorBrands from '@pxblue/colors-branding'
import {
    NotificationsActive,
    Notifications,
    Info,
    CloudCircle,
    Devices
} from '@material-ui/icons'
import { Labels, Units, Defaults } from '../Utilities/Constants'

const Config = {
    Temperature: {
        icon: <Temp fontSize={'inherit'} htmlColor={Colors.black[500]} />,
        label: Labels.Temperature,
        units: Units.Temperature
    },
    Humidity: {
        icon: <Moisture fontSize={'inherit'} htmlColor={Colors.blue[200]} />,
        label: Labels.Humidity,
        units: Units.Humidity
    },
    Flow: {
        icon: <Flow fontSize={'inherit'} htmlColor={Colors.black[300]} />,
        label: Labels.Flow,
        units: Units.Flow
    },
    Volume: {
        icon: <GasCylinder fontSize={'inherit'} htmlColor={Colors.black[500]} />,
        label: Labels.Volume,
        units: Units.Volume
    },
    alarm: {
        icon: <NotificationsActive />,
        fontSize: 19,
        label: Defaults.alarm,
        color: ColorBrands.crimson['600'],
    },
    alarms: {
        icon: <Notifications />,
        fontSize: 19,
        label: Defaults.alarms,
        color: Colors.black['700'],
    },
    event: {
        icon: <Info />,
        fontSize: 19,
        label: Defaults.event,
        color: Colors.lightBlue['500'],
    },
    events: {
        icon: <Info />,
        fontSize: 19,
        label: Defaults.events,
        color: Colors.black['500'],
    },
    status: {
        icon: <CloudCircle />,
        fontSize: 19,
        label: Defaults.online,
    },
    noData: {
        icon: <Devices />,
        fontSize: 19,
        label: Defaults.noData,
    }

}

export default Config;