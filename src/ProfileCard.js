import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'


const ProfileCard = ({ user }) => {
    return (
        <div style={{ margin: 20, textAlign: 'center' }}>
            <Card style={{ maxWidth: '20rem', height: '12rem' }}>
                <Card.Body>
                    <Card.Title style={{ color: 'red', fontSize: 25, fontFamily: 'cursive' }}>{user.name}</Card.Title>
                    <Card.Subtitle className="mb-2 " style={{ color: 'blue' }}>{user.username}</Card.Subtitle>
                    <Card.Text>
                        <p> email adress : <span style={{ color: 'green' }}>{user.email}</span><br />
                            Phone number : <span style={{ color: 'green' }}>{user.phone}</span><br />
                            email adress : <span style={{ color: 'green' }}>{user.website}</span></p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    )
}

export default ProfileCard
