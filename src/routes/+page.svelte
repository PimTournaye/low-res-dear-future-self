<script>
	import { enhance } from '$app/forms';
	import { superForm } from 'sveltekit-superforms/client';

	export let data;

	let submitted = false;

	const successMessage = `Thank you for submitting your letter! It will find it's way into your mailbox when you're in Shanghai!`;

	// Client API:
	const { form, errors, constraints } = superForm(data.form);
</script>

<main class="xl:mx-16 xl:my-4 md:mx-8 md:my-4 mx-1 mt-4">
	<h1 class="text-6xl uppercase text-left mb-2">Letter to your future self</h1>
	<p class="text-lg text-left">
		It's hard to believe, but the NYC Summer Intensive is already over! Before you know it, we will
		all be in Shanghai, getting ready to graduate! Yet a lot can and will change in a year - most of
		all, each one of us! Here's a fun activity we've come up with: write a letter to your Future
		Self - the you one year from now! You can write in any language you are most comfortable with.
		You can talk about what you hope to learn or accomplish by next summer. Perhaps there's a
		project you'd like to develop or skills to learn? Are there people you'd like to meet or places
		to explore? Whatever you choose to write, your Future Self will be happy to hear from you!
	</p>

	{#if !submitted}
		<form use:enhance method="post" on:submit={() => submitted = true}
		class="mx-auto flex flex-col mt-8">
			<label for="email" class="block mt-4 mb-1">Your email address:</label>
			<input
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.email}
				{...$constraints.email}
				type="email"
				name="email"
				id="email"
				class="p-2.5 w-full text-sm text-gray-400 rounded-lg border focus:border-[#57068c] bg-gray-700 border-gray-600 dark:placeholder-gray-400"
				placeholder="email@nyu.edu"
			/>
			{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

			<label for="message" class="block mt-4 mb-1">Your message to your future self:</label>
			<textarea
				bind:value={$form.message}
				{...$constraints.message}
				aria-invalid={$errors.message ? 'true' : undefined}
				name="message"
				id="message"
				class="p-2.5 w-full text-sm text-gray-400 rounded-lg border focus:border-[#57068c] bg-gray-700 border-gray-600 h-40"
				placeholder="Write your thoughts here..."
			/>
			{#if $errors.message}<span class="invalid">{$errors.email}</span>{/if}

			<button
				type="submit"
				class="bg-[#57068c] text-white py-2 px-4 mt-4 rounded-lg hover:bg-opacity-80 transition"
				>Send</button
			>
		</form>
	{:else}
		<p class="text-lg text-center text-medium mt-16">
			{successMessage}
		</p>
	{/if}
</main>
