export default {
    routes: [
        {
        method: 'GET',
        path: '/applicants/search',
        handler: 'applicant.search',
        config: {
            auth: true, // Set to true if you want authentication
        },
        },
    ],
};