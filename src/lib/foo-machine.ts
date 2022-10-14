import { createMachine } from 'xstate';

type Context = { foo: string };
type Events = { type: 'FOO' } | { type: 'BAR' };

export const fooMachine =
	/** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgDMssA6IrfEABy1gEsAXOrDSgD0QBYAmdAT0QAOAGwkAzBMlSpyNCHIkARgEMATpRr0mLdom4BGAOwkAnGMMBWfkMElB0hxNnpyG2o2askIDggC0wtb+wrKyQA */
	createMachine({
		schema: { context: {} as Context, events: {} as Events },
		tsTypes: {} as import("./foo-machine.typegen").Typegen0,
		id: 'foo',
		initial: 'foo',
		states: {
			foo: {
				on: {
					BAR: {
						target: 'bar'
					}
				}
			},
			bar: {
				on: {
					FOO: {
						target: 'foo'
					}
				}
			}
		}
	});
