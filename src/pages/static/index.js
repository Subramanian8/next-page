import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const json = await response.json();

    return {
        props: { users: json }
    }
}

function Static({ users }) {
    console.log('static users list : ', new Date(), " - ", users);

    return (
        <>
            <Head>
                <title>Next | Static Page</title>
                <meta property="og:title" content="Next static page title" key="title" />
            </Head>
            <List>
                {users && users.map((user, inx) => {
                    return <ListItem key={inx} disablePadding >
                        <ListItemButton>
                            <Link href={`/static/${user.email}`}>
                                <ListItemText primary={user.email} />
                            </Link>
                        </ListItemButton>
                    </ListItem >
                })}
            </List>
        </>
    )
}

export default Static;