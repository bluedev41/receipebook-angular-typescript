import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html',
	styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
	allowNewServer: boolean = false;
	serverCreationStatus: string = 'No server was created';
	serverName: string = '';

	constructor() {
		setTimeout(() => {
			this.allowNewServer = true;
		}, 2000);
	}

	ngOnInit(): void {}

	onCreateServer = () => {
		this.serverCreationStatus =
			'Server was created! Name is ' + this.serverName;
	};

	// Function to capture the input value and store it in the variable
	// onUpdateServerName = (e: any) => {
	// 	this.serverName = e.target.value;
	// 	console.log(this.serverName);
	// };
}
