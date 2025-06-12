import { Route } from '@strapi/strapi';

export default [
    Route({
        method: 'GET',
        path: '/applicants/search',
        handler: 'api::applicant.applicant.search',
        config: {
        auth: false,
        },
    }),
];
