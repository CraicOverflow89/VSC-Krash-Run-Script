import * as vscode from 'vscode';

export function getPath(state: vscode.Memento) {
	const path = state.get<String>('executablePath');
	return typeof path == "string" ? path : "";
}

export async function setPath(context: vscode.ExtensionContext) {
	const path = await vscode.window.showInputBox({
		value: '',
		placeHolder: 'Path to krash executable.'
	});
	context.globalState.update('executablePath', path);
	vscode.window.showInformationMessage(`Krash: Updated executable path.`);
	return path
}