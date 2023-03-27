import React, { useEffect, useState } from 'react';
import { 
    ButtonGroup, 
    Button 
} from '@mui/material';

export default function Home() {
    const [cuisines, setCuisines] = useState([]);

    useEffect(() => {
        // fetch("https://recipes-app-production-ae73.up.railway.app/cuisines")
        fetch("http://localhost:8000/cuisines")
        .then((res) => res.json())
        .then((data) => setCuisines(data));
    }, []);

    return(
        <div>
            <ButtonGroup variant="text" aria-label="text button group">
            {cuisines.map((cuisine) => (
                <Button>
                    {cuisine}
                </Button>
            ))}
            </ButtonGroup>
        </div>
    )
}