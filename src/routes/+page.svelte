<script>
	let sendEmail;
</script>

<main class="hero bg-base-200">
	<div class="hero-content text-center">
		<div class="max-w-md mt-6 mb-4">
			<h1 class="text-6xl uppercase text-left mb-2">Letter to your future self</h1>

				<p class="text-lg text-left">
					It's hard to believe, but the NYC Summer Intensive is already over! Before you know it, we
					will all be in Shanghai, getting ready to graduate! Yet a lot can and will change in a
					year - most of all, each one of us! Here's a fun activity we've come up with: write a
					letter to your Future Self - the you one year from now! You can write in any language you
					are most comfortable with. You can talk about what you hope to learn or accomplish by next
					summer. Perhaps there's a project you'd like to develop or skills to learn? Are there
					people you'd like to meet or places to explore? Whatever you choose to write, your Future
					Self will be happy to hear from you!
				</p>
		</div>
	</div>
</main>

<form class="container mx-auto p-4 flex flex-col" on:submit|preventDefault={sendEmail}>
	<label for="email" class="block mt-4 mb-1">Your email address:</label>
	<input type="email" name="user_email" id="email" class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@nyu.edu" />

	<label for="message" class="block mt-4 mb-1">Your message to your future self:</label>
	<textarea name="message" id="message" class="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-40" placeholder="Write your thoughts here..." />

	<button
		type="submit"
		class="bg-[#57068c] text-white py-2 px-4 mt-4 rounded-lg hover:bg-opacity-80 transition"
		>Send</button
	>
</form>
