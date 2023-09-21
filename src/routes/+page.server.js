import { superValidate } from 'sveltekit-superforms/server';
import { z } from 'zod';
import { fail } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY, SENDGRID_TEMPLATE_ID } from '$env/static/private';

// Email stuff
const date = 	1716343200; // Date to be sent at 	Wed May 22 2024 02:00:00 GMT+0000
// const date = Math.floor(Date.now() / 1000) + 60; // UNIX timestamp of now + 1 minute for testing

export const load = (async () => {
  // Server API:
  const form = await superValidate(schema);
  // Always return { form } in load and form actions.
  return { form };
});

// Name has a default value just to display something in the form.
const schema = z.object({
  email: z.string(),
  message: z.string().min(1).default('Hello, me. Edit me to write your letter!')
});

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, schema);
    if (!form.valid) {
      // Again, always return { form } and things will just work.
      console.log("Form not valid");
      return fail(400, { form });
    }
    const email = form.data.email;
    const emailMessage = form.data.message;

    sgMail.setApiKey(SENDGRID_API_KEY);

    console.log(form.data);
    console.log("Sending email to " + email + typeof(email));


    const msg = {
      to: email,
      from: 'pt2421@nyu.edu', // existing sender
      templateId: SENDGRID_TEMPLATE_ID, // template ID
      dynamicTemplateData: {
        message: emailMessage
      },
      sent_at: date
    };

    sgMail.send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(JSON.stringify(error.response.body));
    })

    return { form }
  }
};