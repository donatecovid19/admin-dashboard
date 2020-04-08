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
    UrlField,
    BooleanField,
    BooleanInput
} from 'react-admin';

export const LinkList = props => (
    <List title="Donation Links" {...props}>
        <Datagrid>
            <TextField source="continent" />
            <TextField source="country" />
            <TextField source="organization" />
            <UrlField source="url" />
            <BooleanField source="verified" />
            <ImageField source="src" title="title" label="Image" />
            <EditButton />
        </Datagrid>
    </List>
);

export const LinkEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="continent" />
            <TextInput source="country" />
            <TextInput source="organization" />
            <TextInput source="url" />
            <BooleanInput source="verified" />
            <ImageInput source="image" label="Related Image" accept="image/*" multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const LinkCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="continent" />
            <TextInput source="country" />
            <TextInput source="organization" />
            <TextInput source="url" />
            <BooleanInput source="verified" />
            <ImageInput source="image" label="Related Image" accept="image/*" multiple>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);