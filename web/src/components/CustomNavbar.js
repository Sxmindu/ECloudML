import React, {useEffect, useState} from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton,
    ListItem, List,
} from "@material-tailwind/react";
import {MenuButton} from "../components";

const CustomNavbar = (props) => {

    const { active } = props;

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const NavList = (props) => {

        let { active } = props;

        let navList = [
            {'title': "People", 'link': "/People"},
            {'title': "Publications", 'link': "/Publications"},
        ]

        return (
            <List className="p-0 mt-2 mb-4 flex flex-col !gap-0 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 lg:h-full">
                {
                    navList.map(({icon, title, link}, key) => (
                        <Typography
                            as="a"
                            href={link}
                            variant="small"
                            color="white"
                            className="p-0 h-full font-normal text-[17px] lg:w-[8rem]"
                            key={key}
                        >
                            <ListItem className="flex items-center h-full rounded-none justify-center hover:bg-[#4285f4] hover:text-white">
                                <div className={active === title ? "navigation active" : "navigation"}>
                                    {title}
                                </div>
                            </ListItem>
                        </Typography>
                    ))
                }
            </List>
        );

    }

    return (
        <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-0 bg-[#3367D6] bg-opacity-1 border-0">
            <div className="flex items-center justify-between text-white">
                <img
                    className=""
                    src="/ucsc-logo.png"
                    alt=""
                />
                <div className="h-[4rem] hidden lg:block">
                    <NavList active={active} />
                </div>
                <MenuButton className="lg:hidden" onClick={() => setOpenNav(!openNav)}/>
            </div>
            <MobileNav open={openNav}>
                <NavList active="Home"/>
            </MobileNav>
        </Navbar>
    );
}

export default CustomNavbar;