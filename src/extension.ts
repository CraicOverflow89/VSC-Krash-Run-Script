import * as vscode from 'vscode';
import { getPath, setPath } from './path';

export function activate(context: vscode.ExtensionContext) {

	// Command: Run Script
	context.subscriptions.push(vscode.commands.registerCommand('extension.krashRunScript', () => {
		vscode.window.createTerminal("Krash", getPath(context.globalState), "-version").show();
		// NOTE: replace the above with a relative path to the script that we're running
	}));

	// Command: Run Shell
	context.subscriptions.push(vscode.commands.registerCommand('extension.krashRunShell', () => {
		vscode.window.createTerminal("Krash", getPath(context.globalState)).show();
	}));

	// Command: Set Path
	context.subscriptions.push(vscode.commands.registerCommand('extension.krashSetPath', () => {
		setPath(context);
	}));
}

export function deactivate() {}