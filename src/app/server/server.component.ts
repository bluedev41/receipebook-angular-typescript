import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [
		`
			.online {
				color: white;
			}
		`,
	],
})
export class ServerComponent {
	serverId: number = 10;
	serverStatus: string = 'offline';
	timestamp: Date;

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
		this.timestamp = new Date();
	}

	getServerStatus = () => {
		return this.serverStatus;
	};

	getColor = () => {
		return this.serverStatus === 'online' ? 'green' : 'red';
	};
}
