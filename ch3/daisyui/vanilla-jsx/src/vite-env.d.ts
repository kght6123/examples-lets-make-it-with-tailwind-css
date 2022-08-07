/// <reference types="vite/client" />
declare namespace JSX {
	interface IntrinsicElements {
			[elemName: string]: any;
	}
	interface Element {
		[elemName: string]: any;
	}
}