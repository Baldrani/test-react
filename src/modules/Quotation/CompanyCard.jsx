import React from "react";
import {Avatar, Icon} from "antd";
import styled from "styled-components";

const CompanyCardContainer = styled.div`
  text-align: left;
  div {
    display: flex;
    align-items: center;
    font-weight: 900;
  }
  i {
    font-size: 15px;
    margin-right: 0.5rem;
  }
`

const CompanyCard = ({company}) => {

    const {name: companyName, email: companyEmail, logoUrl: companyLogoUrl} = company

    return(
        <CompanyCardContainer>
            <div>
                <Avatar shape="square" size={64} src={companyLogoUrl} />
                <p>{companyName}</p>
            </div>
            <Icon type="mail" /><a href={`mailto:${companyEmail}`} target="_top">{companyEmail}</a>
        </CompanyCardContainer>
    )
}

export default CompanyCard