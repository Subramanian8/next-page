import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

import Link from "next/link";

export const getStaticProps = async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/users#");
    const json = await response.json();

    return {
        props: { users: json }
    }
}

function Static({ users }) {
    console.log('users in static : ', new Date(), " - ", users);

    return (
        <List>
            {users && users.map((user, inx) => {
                return <Link key={inx} href={`/static/${user.id}`}>
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

export default Static;