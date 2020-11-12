import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
//Bottom Tab Navigation
import DashBoardSales from './Dashboard_SL.js';
import History from "./TaskHistory_SL.js";
import Report from "./ReportButton_SL.js";
import Profile from './Account_SL.js';

//Account related pages for Salesperson
import AccountSettings from './AccountSetting_SL.js';
import ProfileSettings from './ProfileSetting_SL.js';
import NotificationSettings from './NotificationSetting_SL.js';
import ChangePassword from './ChangePasswordSetting_SL.js';

//Report related pages for Salesperson
import WonLeadReport from './WonLeadsReport_SL.js';
import LostLeadReport from './LostLeadsReport_SL.js';

//Lead related pages for Salesperson
import LeadsDetail from './LeadsDetailWithTask_SL.js';
import Remarks from './Remarks_SL.js';
import EditRemarks from './EditRemarks_SL.js';
import setQuote from './setQuotationSent.js';
import setQuoteAgreed from './setQuotationAgreed.js';

//Create new tasks pages for Salesperson
import CreateCallTask from './CreateCallTask_SL.js';
import CreateAppointmentTask from './CreateAppointmentTask_SL.js';
import CreateOtherTask from './CreateOtherTask_SL.js';

//Task Detail pages for Salesperson
import CallTaskDetaill from './CallTaskDetails_SL.js';
import OtherTaskDetail from './OtherTaskDetails_SL.js';
import AppointmentTaskDetail from './AppointmentTaskDetails_SL.js';

//Edit Task Detail for Salesperson
import EditCallTask from './EditCallTask_SL.js';
import EditOtherTask from './EditOtherTask_SL.js';
import EditAppointmentTask from './EditAppointmentTask_SL.js';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ReportStack = createStackNavigator();
const AccountStack = createStackNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#ff8c00',
        headerShown: false,
        style: {
          backgroundColor: 'black',
        }
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={HomeStackNav}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryStackNav}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={ReportStackNav}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chart-bar-stacked" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackNav}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} style={{ transform: [{ rotateY: '180deg' }] }} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

function HomeStackNav() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={DashBoardSales} options={{headerShown: false}}/>
      <HomeStack.Screen name="Remarks" component={Remarks} />
      <HomeStack.Screen name="Edit Remarks" component={EditRemarks}/>
      <HomeStack.Screen name="Set Quotation Sent" component={setQuote}/>
      <HomeStack.Screen name="Set Quotation Agreed" component={setQuoteAgreed}/>
      <HomeStack.Screen name="Lead Detail" component={LeadsDetail} />
      <HomeStack.Screen name="Create Call Task" component={CreateCallTask} />
      <HomeStack.Screen name="Create Appointment Task" component={CreateAppointmentTask} />
      <HomeStack.Screen name="Create Other Task" component={CreateOtherTask} />
      <HomeStack.Screen name="Call Task Detail" component={CallTaskDetaill}/>
      <HomeStack.Screen name="Other Task Detail" component={OtherTaskDetail}/>
      <HomeStack.Screen name="Appointment Task Detail" component={AppointmentTaskDetail}/>
      <HomeStack.Screen name="Edit Call Task" component={EditCallTask}/>
      <HomeStack.Screen name="Edit Other Task" component={EditOtherTask}/>
      <HomeStack.Screen name="Edit Appointment Task" component={EditAppointmentTask}/>
    </HomeStack.Navigator>
  )
}

function HistoryStackNav() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={History} options={{headerShown: false}}/>
    </HistoryStack.Navigator>
  )
}

function ReportStackNav() {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Report Button" component={Report} options={{headerShown: false}}/>
      <ReportStack.Screen name="Won Leads Report" component={WonLeadReport}/>
      <ReportStack.Screen name="Lost Leads Report" component={LostLeadReport}/>
      <ReportStack.Screen name="Lead Detail" component={LeadsDetail}/>
    </ReportStack.Navigator>
  )
}

function AccountStackNav(){
  return(
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={Profile} options={{headerShown: false}}/>
      <AccountStack.Screen name="Account Settings" component={AccountSettings}/>
      <AccountStack.Screen name="Profile Settings" component={ProfileSettings}/>
      <AccountStack.Screen name="Notification Settings" component={NotificationSettings}/>
      <AccountStack.Screen name="ChangePassword" component={ChangePassword}/>
    </AccountStack.Navigator>
  )
}

export default MyTabs; 