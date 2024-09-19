'use client';

/**
 * This file was automatically generated by the Stencil React Output Target.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */

/* eslint-disable */

import { ChPopover as ChPopoverElement, defineCustomElement as defineChPopover } from "@genexus/chameleon-controls-library/dist/components/ch-popover.js";
import type { EventName, StencilReactComponent } from '@stencil/react-output-target/runtime';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';

type ChPopoverEvents = {
    onPopoverOpened: EventName<CustomEvent<any>>,
    onPopoverClosed: EventName<CustomEvent<any>>
};

const ChPopover: StencilReactComponent<ChPopoverElement, ChPopoverEvents> = /*@__PURE__*/ createComponent<ChPopoverElement, ChPopoverEvents>({
    tagName: 'ch-popover',
    elementClass: ChPopoverElement,
    react: React,
    events: {
        onPopoverOpened: 'popoverOpened',
        onPopoverClosed: 'popoverClosed'
    } as ChPopoverEvents,
    defineCustomElement: defineChPopover
});

export default ChPopover;
