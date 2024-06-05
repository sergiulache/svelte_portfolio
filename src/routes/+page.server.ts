import { GITHUB_API } from '$env/static/private';
import { GITHUB_USER } from '$env/static/private';

export async function load() {
	let contributions = 0;
	let error = '';

	const query = `
		query ($username: String!) {
			user(login: $username) {
				contributionsCollection {
					contributionCalendar {
						totalContributions
					}
				}
			}
		}
	`;

	const variables = {
		username: GITHUB_USER
	};

	try {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${GITHUB_API}`
			},
			body: JSON.stringify({ query, variables })
		});

		const data = await res.json();
		if (res.ok) {
			contributions =
				data.data.user.contributionsCollection.contributionCalendar.totalContributions;
		} else {
			error = data.errors?.[0]?.message || 'An error occurred';
		}
	} catch (err) {
		error = 'Failed to fetch contributions';
	}

	return {
		props: {
			contributions,
			error
		}
	};
}
