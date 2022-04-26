import React from "react";
import {Ul, Li, Box, Button, P} from "../Contacts/Contacts.styled"

export default function Contacts({ contacts, removeContact }) {
    return (
            <Box>
                <Ul>
                    {contacts.map(contact => {
                        return (
                            <Li key={contact.id}>
                                <P>{contact.name}: {contact.number}</P>
                                <Button type="button" onClick={() => removeContact(contact.id)}>Delete</Button>  
                            </Li>
                        )
                    })}
                </Ul>
            </Box>
    );
}



