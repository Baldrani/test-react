import React, { useEffect, useState, Fragment } from 'react';
import {Avatar, Col, Row, Icon, Table} from "antd";
import CompanyCard from "./Quotation/CompanyCard";

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


    const {introductionLetter} = data

    let lots = (((data || {}).sections || {})[0] || {}).lots


    const columns = [
        {
            title: 'Description',
            dataIndex: 'description',
            // render: text => <a href="javascript:;">{text}</a>,
        },
        {
            title: 'Designation',
            dataIndex: 'designation',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];

    let test = {}
    lots && (
        lots.map((lot) =>
            { lot.lignes && (
                test = lot.lignes.map((ligne, index) => {
                    ligne['key'] = index
                    console.log(ligne)
                })
            )
        }
    ))

    test.length > 1 && console.log(test)

    return(
        <Row gutter={16}>
            <p>{introductionLetter}</p>
            <Col span={12}>
                {test &&
                    <p>yoolooo</p>
                }
            </Col>
            <Col span={12}>
                <CompanyCard data={data} columns={columns}/>
            </Col>
        </Row>
    )
}

export default Quotation