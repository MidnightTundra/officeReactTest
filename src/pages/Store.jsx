import { Container, Row, Col, Grid, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { StoreArray } from "../components/Items/StoreArray";
import { ItemSearchBar } from '../components/Items/ItemSearchBar'

export function Store() {
    const [storeCategory, setCategory] = useState('all');
    const [searchString, setSearch] = useState();
    const [items, setItems] = useState();

    function handleCategory (newValue) {
        setCategory(newValue);
        console.log(`category update! ${newValue}`);
    }

     function handleSearch (newValue) {
        setSearch(newValue);
        console.log("Search Update!")
     }


    useEffect(() => {
        async function getData() {
            //fetch(import.env.meta.VITE_API_URL + "/item/findcat?cat=" + storeCategory,)
            console.log(`New Use Effect For Store Category ${storeCategory}`)
            let data = await (await fetch('example.com/api/item/findcat?cat=' + storeCategory)).json();
            setItems(data);
        }
        getData();
    }, [storeCategory]);

    useEffect(() => {
        async function getData() {
            let data = await (await fetch('example.com/api/item/find' + searchString)).json();
            setItems(data);
        }
        getData();
    }, [searchString])

    return (
        <Container>
            <Row>
                {/*Navigational Bar here*/}
                <ItemSearchBar category={handleCategory} search={handleSearch} />
            </Row>
            <Container>
                <StoreArray />
            </Container>
        </Container>
    );

}