import React, {Fragment, useState} from 'react';
import {Row, Table, Tag} from "antd";
import styled from "styled-components";

const TotalPrice = styled.div`
  text-align: right;
  margin: 1rem 0;
  span {
    font-weight: 900;
  }  
`

const Profession = ({profession: initialProfession}) => {

    const [profession, setProfession] = useState(initialProfession)
    const [totalTTC, setTotalTTC] = useState(0)
    const [totalHT, setTotalHT] = useState(0)

    const columns = [
        {
            title: 'Designation',
            dataIndex: 'designation',
            key: 'designation',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Prix HT',
            dataIndex: 'prixHT',
            key: 'prixHT',
            render: prixHT => ( <Tag key={prixHT}> {prixHT} €</Tag> )
        },
        {
            title: 'Prix TTC',
            dataIndex: 'prixTTC',
            key: 'prixTTC',
            render: prixTTC => ( <Tag key={prixTTC}> {prixTTC} €</Tag> )

        }
    ];

    let sumHT = 0;
    let sumTTC = 0;

    if((profession || {}).lignes){
        const newProfession = profession.lignes.map((ligne, index) => {
            sumHT += ligne.prixHT
            sumTTC += ligne.prixTTC
            ligne['key'] = index
            return ligne
        })

        setTotalHT(sumHT)
        setTotalTTC(sumTTC)
        setProfession(newProfession)
    }


    return (
        <Fragment>
            { (((profession || {}).lignes || {})[0] || {})  &&
                <Table columns={columns} dataSource={profession} />
            }
            <Row>
                { totalHT !== 0 &&
                    <TotalPrice>
                        <span>Prix total HT : </span><Tag color={"green"}>{Math.round(totalHT * 100) / 100} €</Tag>
                    </TotalPrice>
                }
                { totalTTC !== 0 &&
                    <TotalPrice>
                        <span>Prix total TTC : </span><Tag color={"green"}>{Math.round(totalTTC * 100) / 100} €</Tag>
                    </TotalPrice>
                }
            </Row>
        </Fragment>
    );
}

export default Profession