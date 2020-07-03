import * as React from "react";
import { List, Datagrid, TextField, EmailField,TextInput,Edit,SimpleForm ,Create} from 'react-admin';
export const employeeList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
          <TextField source="id" />
            <TextField source="name" />
-           <TextField source="age" />
            <EmailField source="email" />
            <TextField source="phone" />
-           <TextField source="address.street" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
           <TextInput source="id" />
           <TextInput source="name" />
            <TextInput source="age" />
           <TextInput source="phone" />
         <TextInput multiline source="email" />
        </SimpleForm>
    </Edit>
);
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput disabled source="id" />
            
                       <TextInput source="name" />
                        <TextInput source="age" />
                       <TextInput source="phoneNo" />
                     <TextInput multiline source="email" />
                    
        </SimpleForm>
    </Create>
);