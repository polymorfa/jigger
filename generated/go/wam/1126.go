const WamGifSearchCancelled = 1126 // channel: regular

type GifSearchCancelledEvent struct {
	GifSearchProvider GIFSEARCHPROVIDER `wam:"gif_search_provider"` // field 1
}