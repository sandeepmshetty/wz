import React from 'react';
import { Table } from 'react-bootstrap';

const data = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'James Brown', age: 35, city: 'Chicago' },
];

const caseTable = () => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.city}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default caseTable;