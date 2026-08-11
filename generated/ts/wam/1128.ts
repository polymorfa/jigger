export const WamGifSearchNoResults = 1128 as const

export interface GifSearchNoResultsEvent {
  /** field 1, wire `gif_search_provider` */
  gifSearchProvider?: GIFSEARCHPROVIDER
  /** field 2, wire `language_code` */
  languageCode?: string
  /** field 3, wire `input_language_code` */
  inputLanguageCode?: string
}