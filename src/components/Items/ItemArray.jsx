import { Row, Col } from "react-bootstrap";
import ItemCard  from "./ItemCard";
import { useState, useEffect } from "react";
//import {Item} from "../../../../server/models/items.model";


export function ItemArray() {
    const [data, setData] = useState([]);

    async function getItems () {
        //let res = await fetch("http://localhost:3000/api/items/findid?id=653c95387e8a364ba658619e");
        let res = await fetch("http://localhost:3000/api/items/findall");
        let data = await res.json();
        //console.log(data);
        setData(data);
    }
    useEffect(() => {
        getItems();
      }, []);

    console.log(data);
    if (data === undefined) {
        return (<h2>Still Loading ....</h2>)
    }
    return (
        <Row className="d-inline-flex p-2">
            {/*Creates item cards based on Database contect*/} 
            {Object.keys(data).map((item, i) => (
                <Col key={item} md="auto" className="">
                    
                    <ItemCard key={item} href="./product/" oid={data[i]["_id"]} price={data[i].price} source={data[i].images[0]} content={data[i].desc} title={data[i].title} />
                </Col>
            ))}

            {/* Reference JSON data through props in the elements to populate site with JSON data.  Server passes */}
        </Row>
    )
}