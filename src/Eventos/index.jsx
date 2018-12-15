import React from 'react';
import { List, Datagrid, TextField , Create, SimpleForm,
    Edit, DisabledInput} from 'react-admin';

export const EventosList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="locale" />
            <TextField source="date" />
            <TextField source="hour" />
            <TextField source="value" />
        </Datagrid>
    </List>
);

export const EventosCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="name" />
            <TextField source="locale" />
            <TextField source="date" />
            <TextField source="hour" />
            <TextField source="value" />
        </SimpleForm>
    </Create>
);

export const EventosEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextField source="name" />
            <TextField source="locale" />
            <TextField source="date" />
            <TextField source="hour" />
            <TextField source="value" />
        </SimpleForm>
    </Edit>
);