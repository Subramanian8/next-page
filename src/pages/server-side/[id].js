import { Card, CardActions, CardContent, Link, Stack, Typography } from "@mui/material";

export const getServerSideProps = async (context) => {
    const id = context.params.id;

    const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
    const json = await response.json();

    return {
        props: { user: json }
    }
}

function Details({ user }) {
    console.log('user :', user);

    return <>
        <Stack>
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