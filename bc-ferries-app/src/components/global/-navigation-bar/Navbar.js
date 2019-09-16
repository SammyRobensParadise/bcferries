import React, {
    Component
} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { version, Button, Row, Col } from "antd";
import "antd/dist/antd.css";
export default class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNaivigation: false,
            sampleText: "This is a string example"
        }
    }
    componentDidMount() {
        this.setState({
            activeNaivigation: true
        })
    }
    render() {
        return (
            <div>
                <Router>
                    <Row gutter={16}>
                        <Col span={6}>fasfasf</Col>
                        <Col span={6}>asfaf</Col>
                        <Col span={6}>asff</Col>
                        <Col span={6}>asfaf</Col>
                    </Row>
                    <p>{this.state.sampleText}</p>
                </Router>
            </div>
        )
    }
}