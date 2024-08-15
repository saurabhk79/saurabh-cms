import { config, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text } from '@keystone-6/core/fields';
export default config({
    db: {
        provider: 'postgresql',
        url: 'postgresql://keystone_owner:Blfr2KwHu1tG@ep-solitary-breeze-a1prsw6a.ap-southeast-1.aws.neon.tech/keystone?sslmode=require',
    },
    lists: {
        User: list({
            access: allowAll,
            fields: {
                name: text({ validation: { isRequired: true } }),
                email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
            },
        }),
    },
});