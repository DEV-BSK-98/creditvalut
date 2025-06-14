/**
 * applicant controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::applicant.applicant');
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::applicant.applicant', ({ strapi }) => ({
    async search(ctx) {
        const { email, phone, name } = ctx.query;

        const orFilters = [];

        if (email) orFilters.push({ Email: { $containsi: email } });
        if (phone) orFilters.push({ Phone: { $containsi: phone } });
        if (name) orFilters.push({ FullName: { $containsi: name } });

        if (orFilters.length === 0) return [];

    const results = await strapi.entityService.findMany('api::applicant.applicant', {
        filters: { $or: orFilters },
        populate: '*',
        });

        return results;
    },
}));
