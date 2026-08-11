export const WamGifFromProviderSent = 1124 as const

export interface GifFromProviderSentEvent {
  /** field 1, wire `gif_search_provider` */
  gifSearchProvider?: GIFSEARCHPROVIDER
}