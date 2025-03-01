import { stripe } from '$lib/stripe/stripe';
import { createOrRetrieveCustomer } from '$lib/utils/supabase-admin';
import { getURL } from '$lib/utils/helpers';

export async function POST({ request, locals: { getSession } }) {
	if (request.method === 'POST') {
		// 1. Destructure the price, group_id and quantity from the POST body
		const { price, group_id, quantity = 1 } = await request.json();
		const newMetadata = { group_id: group_id || null };

		try {
			// 2. Get the user session from Supabase auth
			const supabaseSession = await getSession();
			// 3. Retrieve or create the customer in Stripe
			const customer = await createOrRetrieveCustomer({
				uuid: supabaseSession?.user.id || '',
				email: supabaseSession?.user.email || ''
			});
			// 4. Create a checkout session in Stripe
			let session;
			if (price.type === 'recurring') {
				session = await stripe.checkout.sessions.create({
					payment_method_types: ['card'],
					billing_address_collection: 'required',
					customer,
					customer_update: {
						address: 'auto'
					},
					line_items: [
						{
							price: price.id,
							quantity
						}
					],
					mode: 'subscription',
					allow_promotion_codes: true,
					subscription_data: {
						metadata: newMetadata
					},
					success_url: `${getURL()}api/stripe-checkout/success/${group_id}`,
					cancel_url: `${getURL()}`
				});
			} else if (price.type === 'one_time') {
				session = await stripe.checkout.sessions.create({
					payment_method_types: ['card'],
					billing_address_collection: 'required',
					customer,
					customer_update: {
						address: 'auto'
					},
					line_items: [
						{
							price: price.id,
							quantity
						}
					],
					mode: 'payment',
					allow_promotion_codes: true,
					success_url: `${getURL()}api/stripe-checkout/success/${group_id}`,
					cancel_url: `${getURL()}`
				});
			}

			if (session) {
				return new Response(JSON.stringify({ sessionId: session.id }), {
					status: 200
				});
			} else {
				return new Response(
					JSON.stringify({
						error: { statusCode: 500, message: 'Session is not defined' }
					}),
					{ status: 500 }
				);
			}
		} catch (err) {
			console.log(err);
			return new Response(JSON.stringify(err), { status: 500 });
		}
	} else {
		return new Response('Method Not Allowed', {
			headers: { Allow: 'POST' },
			status: 405
		});
	}
}
