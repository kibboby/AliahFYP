import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//Bottom Tab Navigation
import DashBoard from './Dashboard_SA.js';
import History from "./TaskHistory_SA.js";
import Report from "./ReportOverall_SA.js";

//Process Request page
import ProcessRequest from './ProcessRequest_SA.js';

//Report related pages for Super Admin
import ListCompany from './ListCompany_SA.js';
import ListSalesperson from './ListSalesperson_SA.js';
import ListLeads from './ListLeads_SA.js';
import CompanyDetails from './CompanyDetails_SA.js';
import CompanyReport from './CompanyReport_SA.js';
import CompanyLeads from './CompanyLeads_SA.js';
import SalespersonReport from './SalespersonReport_SA.js';
import SalespersonDetail from './SalespersonDetail_SA.js';
import SalespersonLeads from './SalespersonReportLead_SA.js';
import AccountLead from './AccountLead_SA.js';
import AccountSale from './AccountSale_SA.js';
import AccountCA from './AccountCA_SA.js';

//Account related pages for Super Admin
import Account from './Account_SA.js';
import AccountSettings from './AccountSetting_SA.js';
import NotificationSettings from './NotificationSetting_SA.js';
import ProfileSettings from './ProfileSetting_SA.js';
import ChangePassword from './ChangePasswordSetting_SA.js';

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
            <HomeStack.Screen name="Request" component={ProcessRequest} />
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
        <ReportStack.Navigator navigationOptions="">
            <ReportStack.Screen name="Overall Report" component={Report} options={{ headerShown: false }} />
            <ReportStack.Screen name="List of Company" component={ListCompany} options={{ headerShown: false }}/>
            <ReportStack.Screen name="List of Salesperson" component={ListSalesperson} options={{ headerShown: false }}/>
            <ReportStack.Screen name="List of Leads" component={ListLeads} options={{ headerShown: false }}/>
            <ReportStack.Screen name="Company Details" component={CompanyDetails} options={{title: 'Company Report'}}/>
            <ReportStack.Screen name="Company Report" component={CompanyReport} options={{title: 'Company Report'}}/>
            <ReportStack.Screen name="Company Leads" component={CompanyLeads} options={{title: 'Company Report'}}/>
            <ReportStack.Screen name="Salesperson Report" component={SalespersonReport} />
            <ReportStack.Screen name="Salesperson Detail" component={SalespersonDetail} />
            <ReportStack.Screen name="Salesperson Leads" component={SalespersonLeads} />
            <ReportStack.Screen name="Lead Detail" component={AccountLead} />
            <ReportStack.Screen name="Salesperson Account Detail" component={AccountSale} />
            <ReportStack.Screen name="Company Admin Account Detail" component={AccountCA} />
        </ReportStack.Navigator>
    )
}

function AccountStackNav() {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="Account" component={Account} />
            <AccountStack.Screen name="Account Settings" component={AccountSettings} />
            <AccountStack.Screen name="Profile Settings" component={ProfileSettings} />
            <AccountStack.Screen name="Notification Settings" component={NotificationSettings} />
            <AccountStack.Screen name="Change Password Settings" component={ChangePassword} />
        </AccountStack.Navigator>
    )
}

export default MyTabs;