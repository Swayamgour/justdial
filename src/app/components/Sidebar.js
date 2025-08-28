import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Search, User, ChevronDown, ChevronUp } from "lucide-react";
import { Heart, Bookmark, Edit, Wallet, Globe, Bell, Briefcase, Users, Headphones } from "lucide-react";

// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-lg font-semibold">Profile</h2>
                <button  className="text-gray-600 text-xl">
                    ✕
                </button>
            </div>

            <div className="flex items-center space-x-3 p-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 transition-colors">
                    <User className="w-4 h-4 " />
                    {/* <Sidebar /> */}
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800">Aman</h3>
                    <button className="text-blue-600 text-sm">Click to view profile</button>
                </div>
            </div>


            <div className="mx-4 my-3 bg-blue-50 rounded-lg p-3 cursor-pointer hover:bg-blue-100">
                <p className="text-sm font-semibold text-blue-700">🚀 Boost Your Business</p>
            </div>

            <div className="px-2 flex-1 overflow-y-auto">
                <ul className="space-y-2">
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Heart className="w-4 h-4 text-gray-500" />
                        <span>Favorites</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Bookmark className="w-4 h-4 text-gray-500" />
                        <span>Saved</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Edit className="w-4 h-4 text-gray-500" />
                        <span>Edit Profile</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Wallet className="w-4 h-4 text-gray-500" />
                        <span>My Transaction</span>
                    </li>
                    {/* <li className="flex items-center justify-between px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <div className="flex items-center gap-3">
                            <Globe className="w-4 h-4 text-gray-500" />
                            <span>Change Language</span>
                        </div>
                        <select className="text-sm border rounded-md px-1">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </li> */}
                </ul>

                <hr className="my-3" />

                <ul className="space-y-2">
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Bell className="w-4 h-4 text-gray-500" />
                        <span>Notifications</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Briefcase className="w-4 h-4 text-gray-500" />
                        <span>My Business</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span>Leads</span>
                    </li>
                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-md cursor-pointer">
                        <Headphones className="w-4 h-4 text-gray-500" />
                        <span>Customer Service</span>
                    </li>
                </ul>
            </div>
            {/* </div> */}

        </Box >
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    {/* <Button className='text-white' onClick={toggleDrawer('right', true)}>{<User className="w-4 h-4" />}</Button> */}
                    <Button className="text-white" onClick={toggleDrawer('right', true)}>
                        <User className="w-4 h-4 stroke-white" />
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer('right', false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}