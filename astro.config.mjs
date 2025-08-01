// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const isProduction = process.env.NODE_ENV === 'production';

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
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: '/sorrel-open-graph.jpg',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'Sorrel – Free Writing App for Mac & Windows',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: 'Stay focused and organized with Sorrel, a free writing app for Mac & Windows. Designed to help you write more, with zero distractions — even offline.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:url',
						content: 'https://sorrel.pages.dev',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:title',
						content: 'Sorrel – Free Writing App for Mac & Windows',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: 'Stay focused and organized with Sorrel, a free writing app for Mac & Windows. Designed to help you write more, with zero distractions — even offline.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: '/sorrel-open-graph.jpg',
					},
				},
				// Add Umami script only in production
				// @ts-ignore
				...(isProduction ? [{
					tag: 'script',
					attrs: {
						async: true,
						defer: true,
						'data-website-id': '4216fbb9-08aa-4cd9-a355-73b2cbd0e40e',
						src: 'https://cloud.umami.is/script.js'
					}
				}] : []),
			],
			title: 'Sorrel',
			logo: {
				src: './src/assets/sorrel-logo.png',
			},
			sidebar: [
				{
					label: 'Getting started',
					items: [
						{ label: 'Download and Install Sorrel', slug: 'getting-started/installation' },
						{ label: 'Managing Workspaces', slug: 'getting-started/workspace' },
						{ label: 'Create your first note', slug: 'getting-started/create-note' },
						{ label: 'Export', slug: 'getting-started/export' },
						{ label: 'Update Sorrel', slug: 'getting-started/update' },
					],
				},
				{
					label: 'Writing & Formatting',
					autogenerate: { directory: 'formatting' }
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
