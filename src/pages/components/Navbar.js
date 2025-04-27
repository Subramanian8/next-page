import { AppBar, Stack, Toolbar, Typography, styled } from "@mui/material";

import Link from "next/link";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    background: "black"
})

function Navbar() {
    return <AppBar position="static">
        <StyledToolbar>
            <Typography variant="h5">
                Next
            </Typography>
            <Stack spacing={2} direction={"row"}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/nested/contact"}>Contact</Link>
            </Stack>
        </StyledToolbar>
    </AppBar>
}

export default Navbar;