import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import Head from "next/head";
import Link from "next/link";

export const getServerSideProps = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users#");
    const json = await response.json();

    return {
        props: { users: json }
    }
}

function ServerSide({ users }) {
    // console.log('server-side user list : ', new Date(), " - ", users);

    return (
        <>
            <Head>
                <title>Next | Server-side Page</title>
                <meta property="og:title" content="Next server-side page title" key="title" />
            </Head>
            <List>
                {users && users.map((user, inx) => {
                    return <Link key={inx} href={`/server-side/${user.id}`}>
                        <ListItem disablePadding >
                            <ListItemButton>
                                <ListItemText primary={user.name} />
                            </ListItemButton>
                        </ListItem >
                    </Link>
                })}
            </List>
        </>
    )
}

export default ServerSide;