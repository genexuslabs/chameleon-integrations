'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { ChTextblock as ChTextblockElement, defineCustomElement as defineChTextblock } from "@genexus/chameleon-controls-library/dist/components/ch-textblock.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type ChTextblockEvents = { onOverflowingContentChange: EventName<CustomEvent<boolean>> };

const ChTextblock: StencilReactComponent<ChTextblockElement, ChTextblockEvents> = /*@__PURE__*/ createComponent<ChTextblockElement, ChTextblockEvents>({
    tagName: 'ch-textblock',
    elementClass: ChTextblockElement,
    react: React,
    events: { onOverflowingContentChange: 'overflowingContentChange' } as ChTextblockEvents,
    defineCustomElement: defineChTextblock
});

export default ChTextblock;
