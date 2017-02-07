/*--------------------------------------------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *-------------------------------------------------------------------------------------------*/

import * as vscode from "vscode";

export const DEVICE_CONFIG_FILE = "device.json";

export const ARDUINO_MODE: vscode.DocumentSelector = [
    { language: "cpp", scheme: "file" },
    { language: "arduino", scheme: "file" },
];

export const BOARD_MANAGER_URI = vscode.Uri.parse("board-manager://arduino/packages");
export const BOARD_MANAGER_PROTOCOL = "board-manager";