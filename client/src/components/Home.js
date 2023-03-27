import React, { useEffect, useState } from 'react';
import { 
    ButtonGroup, 
    Button 
} from '@mui/material';

export default function Home() {
    const [cuisines, setCuisines] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/cuisines")
        .then((res) => res.json())
        .then((data) => setCuisines(data));
    }, []);

    console.log(cuisines)

    return(
        <div>
            <ButtonGroup variant="text" aria-label="text button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}