export default [
    {
        method: 'GET',
        path: '/applicants/search',
        handler: 'api::applicant.applicant.search',
        config: {
        auth: false, // optional: allow public access
        policies: [],
        },
    },
];
