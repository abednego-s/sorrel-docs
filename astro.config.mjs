// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: [
				// Relative path to your custom CSS file
				'./src/assets/custom.css',
			],
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						href: '/favicon.ico',
					},
				},
			],
			title: 'Sorrel',
			logo: {
				src: './src/assets/sorrel-logo.png',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Download and Install Sorrel', slug: 'guides/installation' },
						{ label: 'Managing Workspaces', slug: 'guides/workspace' },
						{ label: 'Create your first note', slug: 'guides/create-note' },
						{ label: 'Export', slug: 'guides/export' },
						{ label: 'Update Sorrel', slug: 'guides/update' },
					],
				},
				{
					label: 'Sorrel',
					items: [
						{ label: 'Download', slug: 'download' },
					],
				},
				{
					label: 'Get involved',
					items: [
						{ label: 'Feedback', slug: 'feedback' },
					],
				},
			],
		}),
	],
});
