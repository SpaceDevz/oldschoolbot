import { Monitor, KlasaClient, MonitorStore, KlasaMessage } from 'klasa';

import { SupportServer, Emoji } from '../lib/constants';
import { roll } from '../lib/util';

const rareRoles: [string, number][] = [
	['670211706907000842', 250 / 10],
	['670211798091300864', 2500 / 10],
	['670212713258942467', 25_000 / 10],
	['670212821484568577', 250_000 / 10],
	['670212876832735244', 10_000_000 / 10]
];

export default class extends Monitor {
	public constructor(
		client: KlasaClient,
		store: MonitorStore,
		file: string[],
		directory: string
	) {
		super(client, store, file, directory, {
			enabled: true,
			ignoreOthers: false,
			ignoreBots: true,
			ignoreEdits: true
		});
	}

	async run(msg: KlasaMessage) {
		if (!msg.guild || msg.guild.id !== SupportServer) {
			return;
		}

		if (!roll(10)) return;

		for (const [roleID, chance] of rareRoles) {
			if (roll(chance)) {
				msg.member?.roles.add(roleID);
				msg.react(Emoji.Gift);
			}
		}
	}
}
