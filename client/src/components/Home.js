import React, { useEffect, useState } from 'react';
import { 
    ButtonGroup, 
    Button 
} from '@mui/material';

export default function Home() {
    const [cuisines, setCuisines] = useState("");

    useEffect(() => {
      fetch("https://recipes-app-production-ae73.up.railway.app/cuisines")
        .then((res) => res.json())
        .then((data) => setCuisines(data.cuisines));
    }, []);

    return(
        <div>
            {cuisines}

            <ButtonGroup variant="text" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}