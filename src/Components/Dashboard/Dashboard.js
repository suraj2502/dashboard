
import * as React from "react";
import { Admin, Resource,EditGuesser } from 'react-admin';
import { employeeList } from '../employeeList';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const Dashboard = () => (
    <Admin  dataProvider={dataProvider}>
        <Resource name="Users" list={employeeList}  edit={EditGuesser} />
    </Admin>
);

export default Dashboard ;