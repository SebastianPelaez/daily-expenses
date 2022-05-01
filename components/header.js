import React from "react";
import {View, Text, TouchableOpacity } from 'react-native';
import { Row, Col } from 'react-native-responsive-grid-system';

export default function header(){

    return (
        <View style={{ flexDirection: "row", alignSelf: "center", paddingTop: 10 }}>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <Text style={{fontSize: 20}}>
                        Daily Expenses
                    </Text>
                </Col>
            </Row>
            <Row>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <HeaderButton text="Add Expense"></HeaderButton>
                    <HeaderButton text="Report"></HeaderButton>
                </Col>
                
            </Row>                        

        </View>
        
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity>
        <Text>{props.text}</Text>
    </TouchableOpacity>

)