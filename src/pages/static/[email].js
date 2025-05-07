import { Card, CardActions, CardContent, Link, Stack, Typography } from "@mui/material";

import Head from "next/head";

export const getStaticPaths = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const json = await response.json();
    // console.log('getStaticPaths json :', json);

    const paths = json.flatMap((user) => [
        { params: { email: `${user.email.toString()}-details` } },
        { params: { email: `${user.email.toString()}-posts` } }
    ])

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const [email, type] = context.params.email.split('-');

    const response = await fetch("https://jsonplaceholder.typicode.com/comments?email=" + email);
    const json = await response.json();
    // console.log('getStaticProps json :', json);

    return {
        props: { user: json, type }
    }
}

function StaticDetails(props) {
    const { type } = props;
    const user = props.user[0];

    const otherType = type === "details" ? "posts" : "details";

    return <>
        <Stack>
            <Head>
                <title>Next | Static Page | {user.name} | {type}</title>
                <meta property="og:title" content={`Next static page title | ${user.name}`} key="title" />
            </Head>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="body2">
                        {type}
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {user.name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {user.email}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {user.body}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={`/static/${user.email}-${otherType}`}>Go to {otherType}</Link>

                    <br />

                    <Link href={"/static"}>Go to static users</Link>
                </CardActions>
            </Card>
        </Stack>
    </>
}

export default StaticDetails;