/// <reference types="@sanity-codegen/types" />

declare namespace Sanity {
  namespace Schema {
    /**
     * Todo
     */
    interface Todo extends Sanity.Document {
      _type: "todo";

      /**
       * Todo - `String`
       */
      todo?: string;

      /**
       * Category - `Array`
       */
      category?: Array<Sanity.Keyed<string>>;

      /**
       * Is Complete - `Boolean`
       */
      isComplete?: boolean;

      /**
       * Refs - `Array`
       */
      refs?: Array<Sanity.KeyedReference<Bookmark>>;
    }

    /**
     * Bookmark
     */
    interface Bookmark extends Sanity.Document {
      _type: "bookmark";

      /**
       * Title - `String`
       */
      title?: string;

      /**
       * Url - `Url`
       */
      url?: string;

      /**
       * Category - `Array`
       */
      category?: Array<Sanity.Keyed<string>>;
    }

    type Document = Todo | Bookmark;
  }
}
