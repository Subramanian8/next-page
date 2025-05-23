import { Stack, Typography } from "@mui/material";

import Head from "next/head";

function About() {
    return <>
        <Head>
            <title>Next | About</title>
            <meta property="og:title" content="Next about page title" key="title" />
        </Head>
        <Stack spacing={5} mt={10} mb={20}>
            <Typography>
                About
            </Typography>
        </Stack>
    </>
}

export default About;