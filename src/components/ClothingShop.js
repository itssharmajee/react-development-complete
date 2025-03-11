import ClothCard from "./ClothCard";
import { useState, useEffect } from 'react';
import { Skeleton } from '../components/Skeleton'
import { CLOTH_URL } from "../utils/constraints.js";
const ClothingShop = () => {
    const [clothData, setclothData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(CLOTH_URL);
            const data = await response.json();
            setclothData(data); 
        } catch (error) {
            console.log(error + 'check you internet connectivity');
        }
    }
    useEffect(() => {
        fetchData()

    }, []);

    const styles = {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: "center",
        alignItem: 'center',
        gap: '10px'
    }

    if (clothData.length === 0) return <Skeleton />

    return (
        <div style={styles} >
            {
                clothData.map((item) => (
                    <ClothCard key={item.id} data={item} />
                ))
            }
        </div>
    )
}

export default ClothingShop;