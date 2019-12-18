import { commands, workspace, window, ExtensionContext } from 'vscode';

// import 'date-format-lite';
import * as moment from 'moment';
// import * as momenttimezone from 'moment-timezone';

const INPUT_PROMPT = 'Date and Time format';
const DEFAULT_FORMAT = 'YYYY-MM-DD HH:mm:ss';

function getConfiguredFormat(format:string = 'format'): string {
  const insertMomentStringConfiguration = workspace.getConfiguration('insertMomentString');
  return insertMomentStringConfiguration.get(format, DEFAULT_FORMAT);
}

function getMomentFormattedString(userFormat = getConfiguredFormat()):string {
  const now = moment();
  return now.format(userFormat);
}

function getFormattedDateString(userFormat = getConfiguredFormat()):string {
  const now = moment();
  return now.format(userFormat);
}

function getFormattedTimeString(userFormat = getConfiguredFormat()):string {
  const now = moment();
  return now.format(userFormat);
}

function getNumericTimestamp():string {
  const now = moment();
  // return Number(now);
  return now.format('x');
}

function replaceEditorSelection(text: string) {
  const editor = window.activeTextEditor;
  const selections = editor.selections;

  editor.edit((editBuilder) => {
    selections.forEach((selection) => {
      editBuilder.replace(selection, '');
      editBuilder.insert(selection.active, text);
    });
  });
}

export function activate(context: ExtensionContext): void {
  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertDateTime',
    () => replaceEditorSelection(getFormattedDateString())
  ));

  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertDate',
    () => replaceEditorSelection(getFormattedDateString(getConfiguredFormat('formatDate')))
  ));

  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertTime',
    () => replaceEditorSelection(getFormattedDateString(getConfiguredFormat('formatTime')))
  ));

  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertSortable',
    () => replaceEditorSelection(getFormattedDateString(getConfiguredFormat('formatSort')))
  ));

  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertReadable',
    () => replaceEditorSelection(getFormattedDateString(getConfiguredFormat('formatReadable')))
  ));

  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertTimestamp',
    () => replaceEditorSelection(getFormattedTimeString(getConfiguredFormat()))
  ));

  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertTimestampNumeric',
    () => replaceEditorSelection(getNumericTimestamp())
  ));

  context.subscriptions.push(commands.registerCommand(
    'insertMomentString.insertOwnFormatDateTime',
    () => {
      window.showInputBox({
        value: getConfiguredFormat(),
        prompt: INPUT_PROMPT,
      }).then((format) => {
        // replaceEditorSelection(getFormattedDateString(format));
        replaceEditorSelection(getMomentFormattedString(format));
      });
    }
  ));

};
