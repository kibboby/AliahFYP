import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Bottom Tab Navigation Page
import DashBoard from './Dashboard_CA.js';
import History from "./TaskHistory_CA.js";
import Report from "./CompanyReport_CA.js";
import Account from './Account_CA.js';

//Drawer Settings Pages for Company Admin
import AccountSetting from './AccountSetting_CA.js';
import ProfileSetting from './ProfileSetting_CA.js';
import NotificationSetting from './NotificationSetting_CA.js';
import ChangePasswordSetting from './ChangePasswordSetting_CA.js';

//Leads Related Pages for Company Admin
import Remarks from './Remarks_CA.js';
import LeadDetail from './LeadsDetailWithSale_CA.js';
import ListUnassignedLeads from './ListofLeadsWithoutSale_CA.js';
import LeadsWithoutSalesperson from './LeadsDetailWithoutSale_CA.js';

//Salesperson Related Pages for Company Admin
import Reassign from './ReassignSale_CA.js';
import AssignSalesperson from './AssignSalesperson_CA.js';
import AddSalesperson from './AddSalesperson_CA.js';

//Report Pages for Company Admin
import ListSalesperson from './ListSalesperson_CA.js';
import SalespersonReportProfile from './SalespersonReportProfile_CA.js';
import SalespersonReportLeads from './SalespersonReportLead_CA.js';
import LeadsReport from './LeadsReport_CA.js';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HistoryStack = createStackNavigator();
const ReportStack = createStackNavigator();
const AccountStack = createStackNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#000000',
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

  );
}

function HomeStackNav() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Dashboard" component={DashBoard} />
      <HomeStack.Screen name="Remarks" component={Remarks} />
      <HomeStack.Screen name="Lead Detail" component={LeadDetail} />
      <HomeStack.Screen name="Reassign" component={Reassign} />
      <HomeStack.Screen name="List Unassigned Leads" component={ListUnassignedLeads} />
      <HomeStack.Screen name="Leads Without Salesperson" component={LeadsWithoutSalesperson} />
      <HomeStack.Screen name="Assign Salesperson" component={AssignSalesperson} />
    </HomeStack.Navigator>
  )
}

function HistoryStackNav() {
  return (
    <HistoryStack.Navigator>
      <HistoryStack.Screen name="History" component={History} />
    </HistoryStack.Navigator>
  )
}

function ReportStackNav() {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Company Report" component={Report} />
      <ReportStack.Screen name="List of Salesperson" component={ListSalesperson} />
      <ReportStack.Screen name="Salespersons Profile" component={SalespersonReportProfile} />
      <ReportStack.Screen name="Salespersons Leads" component={SalespersonReportLeads} />
      <ReportStack.Screen name="Leads Report" component={LeadsReport} />
      <ReportStack.Screen name="Add Salesperson" component={AddSalesperson} />
    </ReportStack.Navigator>
  )
}

function AccountStackNav() {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={Account} />
      <AccountStack.Screen name="Account Setting" component={AccountSetting} />
      <AccountStack.Screen name="Profile Setting" component={ProfileSetting} />
      <AccountStack.Screen name="Notification Setting" component={NotificationSetting} />
      <AccountStack.Screen name="Change Password Setting" component={ChangePasswordSetting} />
    </AccountStack.Navigator>
  )
}

export default MyTabs;
