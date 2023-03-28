import React, { useEffect, useState } from 'react';
import { 
    ButtonGroup, 
    Button,
    Container 
} from '@mui/material';

export default function Home() {
    const [cuisines, setCuisines] = useState([]);
    const [cuisineRecipes, setCuisineRecipes] = useState([]);

    useEffect(() => {
        fetch("https://recipes-app-production-ae73.up.railway.app/cuisines")
        // fetch("http://localhost:8000/cuisines")
        .then((res) => res.json())
        .then((data) => setCuisines(data));
    }, []);

    const displayCuisineRecipes = (cuisine) => {
        try {
            // fetch(`http://localhost:8000/${cuisine}/recipes`)
            fetch(`https://recipes-app-production-ae73.up.railway.app/${cuisine}/recipes`)
            .then((res) => res.json())
            .then((data) => setCuisineRecipes(data))
            console.log({cuisineRecipes})
        } catch (error) {
            console.log(error)
        }

    }

    return(
        <div>
            <Container maxWidth="md" class="bg-orange-500">

                {cuisines.map((cuisine) => (
                    <Button value={cuisine} onClick={(e) => displayCuisineRecipes(e.target.value)}>
                        {cuisine}
                    </Button>
                ))}

            </Container>
        </div>
    )
}