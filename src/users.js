import React from 'react';
import {
    List,
    Edit,
    Create,
    Datagrid,
    TextField,
    EditButton,
    SimpleForm,
    TextInput,
    ImageInput,
    ImageField,
    BooleanField,
    BooleanInput
} from 'react-admin';

export const UserList = props => (
    <List title="Users" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="email" />
            <BooleanField source="isAdmin" label="Admin" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <BooleanInput source="isAdmin" label="Admin" />
            <ImageInput source="avatar" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <BooleanInput source="isAdmin" label="Admin" />
            <ImageInput source="avatar" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);