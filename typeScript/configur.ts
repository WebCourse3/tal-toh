import {Level} from './LevelEnum';

import * as fs from 'fs';


export class configur {
	console: boolean;
	file: boolean;
	colors: boolean;
	logLevel?: Level;

	constructor(console:boolean,file:boolean,colors:boolean, logLevel?: Level) {
		this.console = console;
		this.file = file;
		this.colors = colors;
		this.logLevel = logLevel;
	}

}



