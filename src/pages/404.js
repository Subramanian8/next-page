import { Button, Link, Stack, Typography } from "@mui/material";

import { useEffect } from "react";
import { useRouter } from "next/router";

function PageNotFound() {

    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/")
        }, 3000)

        return () => clearTimeout(timer);
    }, []);

    return <Stack spacing={5} mt={10} mb={20} textAlign={"center"}>
        <Typography>
            Page Not Found
        </Typography>
        <Link href={"/"}>
            <Button>
                Go To Home
            </Button>
        </Link>
    </Stack>
}

export default PageNotFound;