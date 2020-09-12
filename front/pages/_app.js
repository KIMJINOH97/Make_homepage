import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Homepage = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Hompage</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.3/antd.min.css"></link>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.3/antd.min.js"></script>
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
            <div>khkhk</div>
        </>
    );
};

export default Homepage;
