// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import init, { greet } from "../pkg";
import * as fs from "fs";
import * as path from "path";
// @ts-expect-error
import wasm from "!!file-loader!../pkg/vscode_lambda_calc_bg.wasm";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vscode-lambda-calc" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "vscode-lambda-calc.helloWorld",
    async () => {
      // The code you place here will be executed every time your command is executed

      await init(fs.readFileSync(path.join(__dirname, wasm)));

      greet("WebAssembly");
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from vscode-lambda-calc!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
