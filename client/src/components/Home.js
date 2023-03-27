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

    console.log(cuisines)

    // create a function that iterates over the array to return each cuisine to display
    // const listCuisines = () => {
    //     cuisines.forEach((cuisine) => {
    //         console.log(cuisine)
    //         return <Button>{cuisine}</Button>
    //         // return (<Button> cuisine </Button>)
    //     })
    // } 

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