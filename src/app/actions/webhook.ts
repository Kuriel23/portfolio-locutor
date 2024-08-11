"use server";

import axios from "axios";

export async function webhook(
	subject: string,
	email: string,
	message: string,
	name: string,
) {
	await axios.post(
		"https://discord.com/api/webhooks/1193728289219563582/Ey9Gis1_9FfNIyjF4A6Nu2UQ9z3R2dhiw0019KszBC6jJT49NYOydKuCO_SXtYV6opzI",
		{
			username: "Formulário",
			embeds: [
				{
					title: subject,
					description: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
					color: 16757000,
				},
			],
			content: "",
			avatar_url: "https://locutor.work/favicon.gif",
		},
	);
}
