export const WamGifSearchResultTapped = 1122 as const

export interface GifSearchResultTappedEvent {
  /** field 1, wire `gif_search_provider` */
  gifSearchProvider?: GIFSEARCHPROVIDER
  /** field 2, wire `rank` */
  rank?: number
}