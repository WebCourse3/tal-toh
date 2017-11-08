import * as con from './configur';
import * as LoggerFile from './logging';
import { Level } from './LevelEnum';
import * as fs from 'fs';

let path="C:\\Users\\Jbt\\WebstormProjects\\TOH\\typeScript\\constractor.json";
if (fs.existsSync(path)) {
	let jsonfile=fs.readFileSync(path,'utf-8');
	let config= JSON.parse(jsonfile);

	let console=config.console;
	let file=config.file;
	let colors= config.colors;
	if(config.logLevel==Level.info.toString())
		var logLevel= Level.info;
	 if(config.logLevel==Level.error.toString())
		var logLevel= Level.error;
	if(config.logLevel==Level.debug.toString())
		var logLevel= Level.debug;
	if(config.logLevel==Level.warning.toString())
		var logLevel= Level.warning;
	var configurationObject= new con.configur(console, file, colors, logLevel);
}
else
	var configurationObject = new con.configur(true, true, true, undefined);

let logger = new LoggerFile.logging('tal', configurationObject);
let arraysting = ['tal', 'aviv', 'aviv', 'jack'];
logger.log(Level.info, arraysting);
// logger.log(Level.error, arraysting);
// logger.log(Level.warning, arraysting);
// logger.log(Level.debug, arraysting);
// logger.log(Level.info, arraysting);

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC\";";
//
// function setCookie(username, cvalue, exdays) {
// 	var d = new Date();
// 	d.setTime(d.getTime() + (exdays*24*60*60*1000));
// 	var expires = "expires="+ d.toUTCString();
// 	document.cookie =  username + "=" + cvalue + ";" + expires + ";path=/";
// }
// function getCookie(cname) {
// 	var name = cname + "=";
// 	var decodedCookie = decodeURIComponent(document.cookie);
// 	var ca = decodedCookie.split(';');
// 	for(var i = 0; i <ca.length; i++) {
// 		var c = ca[i];
// 		while (c.charAt(0) == ' ') {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return "";
// }