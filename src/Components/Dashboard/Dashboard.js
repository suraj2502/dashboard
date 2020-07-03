
import * as React from "react";
import { Admin, Resource,EditGuesser } from 'react-admin';
import { employeeList,PostEdit,PostCreate } from '../employeeList';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const Dashboard = () => (
    <Admin  dataProvider={dataProvider}>
        <Resource name="Users" list={employeeList}  edit={PostEdit} create={PostCreate} />
    </Admin>
);

export default Dashboard ;