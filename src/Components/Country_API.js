import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Counrty_API = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error('Error fetching countries:', error));
    }, []);

    return (
        <Container>
            {/* Page Heading */}
            <h1 className="text-center my-4">Country Information</h1>
            <Row>
                {countries.map((country, index) => (
                    <Col key={index} sm={12} md={6} lg={3} className="mb-4">
                        <Card style={{ height: '100%' }}>
                            {/* Image with consistent size */}
                            <div style={{ height: '180px', overflow: 'hidden' }}>
                                <Card.Img 
                                    variant="top" 
                                    src={country.flags.png || country.flags[0]}  // Use png if available or fallback to the first element in array
                                    alt={`${country.name.common} flag`} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>{country.name.common}</Card.Title>
                                <Card.Text>
                                    <strong>Capital:</strong> {country.capital ? country.capital[0] : 'N/A'}<br />
                                    <strong>Region:</strong> {country.region}<br />
                                    <strong>Population:</strong> {country.population ? country.population.toLocaleString() : 'N/A'}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Counrty_API;
