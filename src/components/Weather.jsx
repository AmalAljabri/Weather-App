import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
const Weather = (props) => {
    return (
        <div>
            {

                props.error &&
                <p><br />{props.error}</p>
            }
            {
                props.city &&
                <div>
                    <br />
                    <Row>

                        <Col>
                            <Card variant="flat">
                                {
                                    <p>{props.city}, {props.country} </p>
                                }
                                {
                                    props.date &&
                                    <p>{props.date}</p>
                                }
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                {
                                    props.icon &&
                                    <img src={props.icon} alt="" />
                                }
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                {
                                    props.temp &&
                                    <p>{(props.temp - 273.15).toFixed(2)}°C</p>
                                }
                                {
                                    props.description &&
                                    <p>{props.description}</p>
                                }
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Card>
                                {
                                    props.temp_max &&
                                    <p>Max: {(props.temp_max - 273.15).toFixed(2)}°C</p>
                                }
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                {
                                    props.temp_min &&
                                    <p>Min: {(props.temp_min - 273.15).toFixed(2)}°C</p>
                                }
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                {
                                    props.humidity &&
                                    <p>Humidity: {props.humidity}%</p>
                                }
                            </Card>
                        </Col>
                    </Row>
                </div>
            }
        </div>
    );
}


export default Weather;
