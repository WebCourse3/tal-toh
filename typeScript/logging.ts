import * as con from './configur';
import * as fs from 'fs';
import * as LevelFile from './LevelEnum';

export class logging {
	configuration: con.configur;
	name: string;

	constructor(name: string, configu: con.configur) {
		this.configuration = configu;
		this.name = name;
	}

	chooseLevel: any = {
		'info': this.info.bind(this),
		'debug': this.debug.bind(this),
		'warning': this.warning.bind(this),
		'error': this.error.bind(this)
	};

	log(level: LevelFile.Level, strings: Array<string>): void {
		let print = level || this.configuration.logLevel;
		this.chooseLevel[print](strings);
	}

	info(strings: Array<string>): void {//info
		if (this.configuration.console) {
			if (this.configuration.colors)
				strings.forEach(value => (console.log('\x1b[32m%s\x1b[0m', value) ));
			else
				strings.forEach(value => (console.log(value) ));
		}
		if (this.configuration.file) {
			this.write(LevelFile.Level.info, strings);
		}
	}

	debug(strings: Array<string>): void {
		if (this.configuration.console) {
			if (this.configuration.colors)
				strings.forEach(value => (console.log('\x1b[36m%s\x1b[0m', value) ));
			else
				strings.forEach(value => (console.log(value) ));
		}
		if (this.configuration.file) {
			this.write(LevelFile.Level.debug, strings);
		}
	}

	warning(strings: Array<string>): void {
		if (this.configuration.console) {
			if (this.configuration.colors)
				strings.forEach(value => (console.log('\x1b[33m%s\x1b[0m', value) ));
			else
				strings.forEach(value => (console.log(value) ));
		}
		if (this.configuration.file) {
			this.write(LevelFile.Level.debug, strings);
		}
	}

	error(strings: Array<string>): void {
		if (this.configuration.console) {
			if (this.configuration.colors)
				strings.forEach(value => (console.log('\x1b[31m%s\x1b[0m', value) ));
			else
				strings.forEach(value => (console.log(value) ));
		}
		if (this.configuration.file) {
			this.write(LevelFile.Level.debug, strings);
		}
	}

	write(level: LevelFile.Level, strings: Array<string>): void {
		fs.appendFileSync(__dirname + 'test.txt', level + ': ');
		strings.forEach(value => (fs.appendFileSync(__dirname + 'test.txt', value + ' ')));
		fs.appendFileSync(__dirname + 'test.txt', '\n');
	}
}

//let log = new logging("world");


