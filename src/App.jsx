import React from 'react';
import { Admin, Resource } from 'react-admin';
import { EventosList, EventosCreate, EventosEdit } from './Eventos';
import { CriancasList, CriancasCreate, CriancasEdit } from './Criancas';
import { TiosList, TiosCreate, TiosEdit } from './Tios';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="criancas" list={CriancasList} edit={CriancasEdit} create={CriancasCreate}/>
        <Resource name="tios" list={TiosList} edit={TiosCreate} create={TiosEdit}/>
        <Resource name="eventos" list={EventosList} edit={EventosCreate} create={EventosEdit}/>
    </Admin>
);

export default App;