import React from 'react';
import { List, Datagrid, TextField , Create, 
    SimpleForm, Edit, DisabledInput} from 'react-admin';

export const TiosList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="age" />
            <TextField source="tel" />
            <TextField source="facebook" />
            <TextField source="username" />
            <TextField source="password" />
        </Datagrid>
    </List>
);

export const TiosCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextField source="name" />
            <TextField source="age" />
            <TextField source="tel" />
            <TextField source="facebook" />
            <TextField source="username" />
            <TextField source="password" />
        </SimpleForm>
    </Create>
);

export const TiosEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextField source="name" />
            <TextField source="age" />
            <TextField source="tel" />
            <TextField source="facebook" />
            <TextField source="username" />
            <TextField source="password" />
        </SimpleForm>
    </Edit>
);