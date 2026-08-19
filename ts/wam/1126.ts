export const WamGifSearchCancelled = 1126 as const

export interface GifSearchCancelledEvent {
  /** field 1, wire `gif_search_provider` */
  gifSearchProvider?: GIFSEARCHPROVIDER
}