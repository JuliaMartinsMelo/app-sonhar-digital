import React from 'react';
import { List, Datagrid, TextField , Create, 
    SimpleForm, Edit, DisabledInput} from 'react-admin';

export const CriancasList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="nickname" />
            <TextField source="birthdate" />
            <TextField source="responsable" />
            <TextField source="contact" />
        </Datagrid>
    </List>
);

export const CriancasCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="name" />
            <TextField source="nickname" />
            <TextField source="birthdate" />
            <TextField source="responsable" />
            <TextField source="contact" />
        </SimpleForm>
    </Create>
);

export const CriancasEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextField source="name" />
            <TextField source="nickname" />
            <TextField source="birthdate" />
            <TextField source="responsable" />
            <TextField source="contact" />
        </SimpleForm>
    </Edit>
);