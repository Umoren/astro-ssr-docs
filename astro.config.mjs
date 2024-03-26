import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
	output: 'server',
	adapter: awsAmplify(),
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
