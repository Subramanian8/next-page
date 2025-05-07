import { Card, CardActions, CardContent, Link, Stack, Typography } from "@mui/material";

import Head from "next/head";

export const getServerSideProps = async (context) => {
    const id = context.params.id;

    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const json = await response.json();

    return {
        props: { user: json }
    }
}

function Details({ user }) {
    // console.log('server-side user :', user);

    return <>
        <Stack>
            <Head>
                <title>Next | Server-side Page | {user.name}</title>
                <meta property="og:title" content={`Next server-side page title | ${user.name}`} key="title" />
            </Head>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {user.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {user.email}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {user.phone}
                    </Typography>
                    <Typography variant="body2">
                        {user.website}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={"/server-side"}>Go to server-side users</Link>
                </CardActions>
            </Card>
        </Stack>
    </>
}

export default Details;