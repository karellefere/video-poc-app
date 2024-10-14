import { List, ListItemButton } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <List component="nav" className="navigetion">
            <ListItemButton>
                <NavLink to="/">
                    Home
                </NavLink>
            </ListItemButton>
            <ListItemButton>
                <NavLink to="/videojs">
                    Video.js
                </NavLink>
            </ListItemButton>
            <ListItemButton>
                <NavLink to="/ReactHlsPlayer">
                    React Player
                </NavLink>
            </ListItemButton>
            <ListItemButton>
                <NavLink to="/FluidPlayer">
                    Fluid Player
                </NavLink>
            </ListItemButton>
            <ListItemButton>
                <NavLink to="/FlowPlayer">
                    Flowplayer
                </NavLink>
            </ListItemButton>
            <ListItemButton>
                <NavLink to="/webrtc">
                    WebRTC test
                </NavLink>
            </ListItemButton>
            <ListItemButton>
                <NavLink to="/wowzawebrtcplayer">
                    Wowza WebRTC player test
                </NavLink>
            </ListItemButton>
        </List>
    );
}

export default Navigation;