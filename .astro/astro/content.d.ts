declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"articles": {
"2025-09-15-chaotic-grapefruit-manifesto.md": {
	id: "2025-09-15-chaotic-grapefruit-manifesto.md";
  slug: "2025-09-15-chaotic-grapefruit-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-chaotic-grapefruit-theory.md": {
	id: "2025-09-15-chaotic-grapefruit-theory.md";
  slug: "2025-09-15-chaotic-grapefruit-theory";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-chaotic-mango-poem.md": {
	id: "2025-09-15-chaotic-mango-poem.md";
  slug: "2025-09-15-chaotic-mango-poem";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-chaotic-pear-theory.md": {
	id: "2025-09-15-chaotic-pear-theory.md";
  slug: "2025-09-15-chaotic-pear-theory";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-chaotic-pear-tutorial.md": {
	id: "2025-09-15-chaotic-pear-tutorial.md";
  slug: "2025-09-15-chaotic-pear-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-chaotic-salad-tutorial.md": {
	id: "2025-09-15-chaotic-salad-tutorial.md";
  slug: "2025-09-15-chaotic-salad-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-glitchy-grapefruit-interview.md": {
	id: "2025-09-15-glitchy-grapefruit-interview.md";
  slug: "2025-09-15-glitchy-grapefruit-interview";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-glitchy-mango-list.md": {
	id: "2025-09-15-glitchy-mango-list.md";
  slug: "2025-09-15-glitchy-mango-list";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-glitchy-pear-manifesto.md": {
	id: "2025-09-15-glitchy-pear-manifesto.md";
  slug: "2025-09-15-glitchy-pear-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-glitchy-pudding-interview.md": {
	id: "2025-09-15-glitchy-pudding-interview.md";
  slug: "2025-09-15-glitchy-pudding-interview";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-haunted-grapefruit-manifesto.md": {
	id: "2025-09-15-haunted-grapefruit-manifesto.md";
  slug: "2025-09-15-haunted-grapefruit-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-haunted-pear-manifesto.md": {
	id: "2025-09-15-haunted-pear-manifesto.md";
  slug: "2025-09-15-haunted-pear-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-haunted-pudding-interview.md": {
	id: "2025-09-15-haunted-pudding-interview.md";
  slug: "2025-09-15-haunted-pudding-interview";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-haunted-salad-tutorial.md": {
	id: "2025-09-15-haunted-salad-tutorial.md";
  slug: "2025-09-15-haunted-salad-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-haunted-steak-chart.md": {
	id: "2025-09-15-haunted-steak-chart.md";
  slug: "2025-09-15-haunted-steak-chart";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-mystic-beef-poem.md": {
	id: "2025-09-15-mystic-beef-poem.md";
  slug: "2025-09-15-mystic-beef-poem";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-mystic-mango-tutorial.md": {
	id: "2025-09-15-mystic-mango-tutorial.md";
  slug: "2025-09-15-mystic-mango-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-mystic-tomato-tutorial.md": {
	id: "2025-09-15-mystic-tomato-tutorial.md";
  slug: "2025-09-15-mystic-tomato-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-neon-avocado-manifesto.md": {
	id: "2025-09-15-neon-avocado-manifesto.md";
  slug: "2025-09-15-neon-avocado-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-neon-fruit-list.md": {
	id: "2025-09-15-neon-fruit-list.md";
  slug: "2025-09-15-neon-fruit-list";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-neon-grapefruit-theory.md": {
	id: "2025-09-15-neon-grapefruit-theory.md";
  slug: "2025-09-15-neon-grapefruit-theory";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-neon-pear-theory.md": {
	id: "2025-09-15-neon-pear-theory.md";
  slug: "2025-09-15-neon-pear-theory";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-neon-pudding-manifesto.md": {
	id: "2025-09-15-neon-pudding-manifesto.md";
  slug: "2025-09-15-neon-pudding-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-neon-steak-manifesto.md": {
	id: "2025-09-15-neon-steak-manifesto.md";
  slug: "2025-09-15-neon-steak-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-noisy-avocado-list.md": {
	id: "2025-09-15-noisy-avocado-list.md";
  slug: "2025-09-15-noisy-avocado-list";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-noisy-fruit-poem.md": {
	id: "2025-09-15-noisy-fruit-poem.md";
  slug: "2025-09-15-noisy-fruit-poem";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-noisy-kiwi-manifesto.md": {
	id: "2025-09-15-noisy-kiwi-manifesto.md";
  slug: "2025-09-15-noisy-kiwi-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-noisy-kiwi-poem.md": {
	id: "2025-09-15-noisy-kiwi-poem.md";
  slug: "2025-09-15-noisy-kiwi-poem";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-quantum-avocado-interview.md": {
	id: "2025-09-15-quantum-avocado-interview.md";
  slug: "2025-09-15-quantum-avocado-interview";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-quantum-steak-manifesto.md": {
	id: "2025-09-15-quantum-steak-manifesto.md";
  slug: "2025-09-15-quantum-steak-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-shiny-kiwi-poem.md": {
	id: "2025-09-15-shiny-kiwi-poem.md";
  slug: "2025-09-15-shiny-kiwi-poem";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-shiny-noodle-interview.md": {
	id: "2025-09-15-shiny-noodle-interview.md";
  slug: "2025-09-15-shiny-noodle-interview";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-shiny-noodle-list.md": {
	id: "2025-09-15-shiny-noodle-list.md";
  slug: "2025-09-15-shiny-noodle-list";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-shiny-noodle-tutorial.md": {
	id: "2025-09-15-shiny-noodle-tutorial.md";
  slug: "2025-09-15-shiny-noodle-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-avocado-manifesto.md": {
	id: "2025-09-15-sleepy-avocado-manifesto.md";
  slug: "2025-09-15-sleepy-avocado-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-avocado-tutorial.md": {
	id: "2025-09-15-sleepy-avocado-tutorial.md";
  slug: "2025-09-15-sleepy-avocado-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-beef-manifesto.md": {
	id: "2025-09-15-sleepy-beef-manifesto.md";
  slug: "2025-09-15-sleepy-beef-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-kiwi-theory.md": {
	id: "2025-09-15-sleepy-kiwi-theory.md";
  slug: "2025-09-15-sleepy-kiwi-theory";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-kiwi-tutorial.md": {
	id: "2025-09-15-sleepy-kiwi-tutorial.md";
  slug: "2025-09-15-sleepy-kiwi-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-mango-chart.md": {
	id: "2025-09-15-sleepy-mango-chart.md";
  slug: "2025-09-15-sleepy-mango-chart";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-steak-list.md": {
	id: "2025-09-15-sleepy-steak-list.md";
  slug: "2025-09-15-sleepy-steak-list";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-tomato-poem.md": {
	id: "2025-09-15-sleepy-tomato-poem.md";
  slug: "2025-09-15-sleepy-tomato-poem";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-sleepy-tomato-tutorial.md": {
	id: "2025-09-15-sleepy-tomato-tutorial.md";
  slug: "2025-09-15-sleepy-tomato-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-turbo-avocado-list.md": {
	id: "2025-09-15-turbo-avocado-list.md";
  slug: "2025-09-15-turbo-avocado-list";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-turbo-grapefruit-tutorial.md": {
	id: "2025-09-15-turbo-grapefruit-tutorial.md";
  slug: "2025-09-15-turbo-grapefruit-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-turbo-mango-manifesto.md": {
	id: "2025-09-15-turbo-mango-manifesto.md";
  slug: "2025-09-15-turbo-mango-manifesto";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-turbo-mango-poem.md": {
	id: "2025-09-15-turbo-mango-poem.md";
  slug: "2025-09-15-turbo-mango-poem";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-turbo-pear-theory.md": {
	id: "2025-09-15-turbo-pear-theory.md";
  slug: "2025-09-15-turbo-pear-theory";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-turbo-steak-list.md": {
	id: "2025-09-15-turbo-steak-list.md";
  slug: "2025-09-15-turbo-steak-list";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"2025-09-15-turbo-steak-tutorial.md": {
	id: "2025-09-15-turbo-steak-tutorial.md";
  slug: "2025-09-15-turbo-steak-tutorial";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"hello-weirdness.md": {
	id: "hello-weirdness.md";
  slug: "hello-weirdness";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ten-chaotic-listicles.md": {
	id: "ten-chaotic-listicles.md";
  slug: "ten-chaotic-listicles";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
"ultimate-beef-or-fruit-guide.md": {
	id: "ultimate-beef-or-fruit-guide.md";
  slug: "ultimate-beef-or-fruit-guide";
  body: string;
  collection: "articles";
  data: InferEntrySchema<"articles">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
