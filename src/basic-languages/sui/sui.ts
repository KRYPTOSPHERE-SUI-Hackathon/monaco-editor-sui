/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { conf as tsConf, language as tsLanguage } from '../typescript/typescript';
import type { languages } from '../../fillers/monaco-editor-core';

export const conf: languages.LanguageConfiguration = tsConf;

export const language = <languages.IMonarchLanguage>{
	// Set defaultToken to invalid to see what you do not tokenize yet
	defaultToken: 'invalid',
	tokenPostfix: '.js',

	keywords: ['struct'],
	typeKeywords: [],

	operators: [],
	symbols: [],
	escapes: [],
	digits: [],
	octaldigits: [],
	binarydigits: [],
	hexdigits: [],
	regexpctl: [],
	regexpesc: [],
	tokenizer: null as any // defined later
};
