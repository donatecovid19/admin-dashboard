import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Title } from 'react-admin';

export default () => (
    <Card>
        <Title title="Home" />
        <CardHeader title="Fight COVID-19 Dashboard" />
        <CardContent>This is where the analytics stuff will go. This is the homepage!</CardContent>
    </Card>
);