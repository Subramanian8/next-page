import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import Link from "next/link";

export const getStaticProps = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users#");
    const json = await response.json();

    return {
        props: { users: json }
    }
}

function ServerSide({ users }) {
    console.log('users in server-side : ', new Date(), " - ", users);

    return (
        <List>
            {users && users.map((user, inx) => {
                return <Link key={inx} href={`/server-side/${user.id}`}>
                    <ListItem  disablePadding >
                        <ListItemButton>
                            <ListItemText  primary={user.name} />
                        </ListItemButton>
                    </ListItem >
                </Link>
            })}
        </List>
    )
}

export default ServerSide;