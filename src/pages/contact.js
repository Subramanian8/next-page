import { Stack, Typography } from "@mui/material";

import Head from "next/head";

function Contact() {
    return <Stack spacing={5} mt={10} mb={20}>
        <Head>
            <title>Next | Contact</title>
            <meta property="og:title" content="Next contact page title" key="title" />
        </Head>
        <Typography>
            Contact
        </Typography>
    </Stack>
}

export default Contact;