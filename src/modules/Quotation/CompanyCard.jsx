import React, {Fragment} from "react";
import {Avatar, Icon} from "antd";

const CompanyCard = (props) => {

    const {name: companyName, email: companyEmail, logoUrl: companyLogoUrl} = ((props.data || {}).company || {})

    return(
        <Fragment>
            <Avatar shape="square" size={64} src={companyLogoUrl} />
            <p>{companyName}</p>
            <Icon type="mail" /><span>{companyEmail}</span>
        </Fragment>
    )
}

export default CompanyCard