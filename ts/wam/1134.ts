export const WamGifSearchSessionStarted = 1134 as const

export interface GifSearchSessionStartedEvent {
  /** field 1, wire `gif_search_provider` */
  gifSearchProvider?: GIFSEARCHPROVIDER
}