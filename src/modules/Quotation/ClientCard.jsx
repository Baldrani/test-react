import React, {Fragment} from "react";
import { Icon } from "antd"
import styled from "styled-components";

const UserCard = styled.div`
  text-align: right;
  > p {
    margin: 0;
    &:first-child{
      font-weight: 900;
    }
  }
`

const BillingAddress = styled.div`
  text-align: right; 
  display: flex;
  justify-content: flex-end;
  p {
    margin: 0
  }
  i {
    font-size: 20px;
    margin-right: 1rem;
  }
`

const ClientCard = ({customer}) => {

    const {customerName, customerEmail, billingAddress} = customer

    return(
        <UserCard>
            <p>{customerName}</p>
            <p>{customerEmail}</p>
            <hr/>
            <BillingAddress>
                { (billingAddress || {}).city &&
                <Fragment>
                    <Icon type="home" />
                    <p>{billingAddress.city},&nbsp;</p>
                    <p>{billingAddress.address},&nbsp;</p>
                    <p>{billingAddress.postalCode}</p>
                </Fragment>
                }
            </BillingAddress>
        </UserCard>
    )
}

export default ClientCard