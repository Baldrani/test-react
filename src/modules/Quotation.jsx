import React, { useEffect, useState } from 'react';
import {Col, Row, Tag} from "antd";
import CompanyCard from "./Quotation/CompanyCard";
import Professions from "./Quotation/Professions";
import styled from 'styled-components';
import ClientCard from "./Quotation/ClientCard";

const Div = styled.div`
  margin: 2rem;
`;

const PrixTotal = styled.div`
  text-align: right;
  span {
    font-weight: 900;
  }  
`

const Title = styled.h2`
  margin-top: 2rem;
`

const Quotation = () => {

    const [data, setData] = useState({})

    useEffect( () => {
        const fetchData = async () => {
            await fetch("data.json")
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                    setData(json)
                })
        }
        fetchData()
    }, [])


    const {introductionLetter, prixTotalTTC, prixTotalHT, title} = data

    let lots = (((data || {}).sections || {})[0] || {}).lots

    /* Test to get deeper data */
    const getNestedObject = (nestedObj, pathArr) => {
        return pathArr.reduce((obj, key) =>
            (obj && obj[key] !== 'undefined') ? obj[key] : undefined, nestedObj);
    }

    const test = getNestedObject(data, ['sections', 0, 'lots', 0, 'lignes', 0, 'locationsDetails', 'locations', 0, 'uuid'])
    if(test) console.log(test)

    return(
        <Div>
            <Row>
                <Col span={12}>
                    {data.company &&
                    <CompanyCard company={data.company}/>
                    }
                </Col>
                <Col span={12}>
                    { data.deal && !data.deal.isTravauxlib &&
                    <ClientCard customer={data.deal} />
                    }
                </Col>
            </Row>
            <Row>
                <Title>{title}</Title>
                <p>{introductionLetter}</p>
            </Row>
            <hr/>
            <Row>
                { lots &&
                    <Professions professions={lots} />
                }
            </Row>
            <hr/>
            <PrixTotal>
                <span>Prix total HT : </span><Tag color={"blue"} >{prixTotalHT} €</Tag>
                <span>Prix total TTC : </span><Tag color={"blue"} >{prixTotalTTC} €</Tag>
            </PrixTotal>
        </Div>
    )

}

export default Quotation