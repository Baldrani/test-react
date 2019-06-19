import React, {Fragment} from 'react';
import { Tabs } from 'antd';
import Profession from "./Profession";

const { TabPane } = Tabs;

const Professions = (props) => {

    const {professions} = props

    return (
        <Fragment>
            <Tabs defaultActiveKey="1">
                { professions &&
                    professions.map((profession, index) =>
                        <TabPane tab={profession.label} key={index}>
                            <Profession profession={profession} />
                        </TabPane>
                     )
                }
            </Tabs>
        </Fragment>
    );
}

export default Professions