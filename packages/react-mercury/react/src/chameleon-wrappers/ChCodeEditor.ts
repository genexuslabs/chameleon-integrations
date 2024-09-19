'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { ChCodeEditor as ChCodeEditorElement, defineCustomElement as defineChCodeEditor } from "@genexus/chameleon-controls-library/dist/components/ch-code-editor.js";
import type { StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type ChCodeEditorEvents = NonNullable<unknown>;

const ChCodeEditor: StencilReactComponent<ChCodeEditorElement, ChCodeEditorEvents> = /*@__PURE__*/ createComponent<ChCodeEditorElement, ChCodeEditorEvents>({
    tagName: 'ch-code-editor',
    elementClass: ChCodeEditorElement,
    react: React,
    events: {} as ChCodeEditorEvents,
    defineCustomElement: defineChCodeEditor
});

export default ChCodeEditor;
