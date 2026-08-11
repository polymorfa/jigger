const WamGifSearchSessionStarted = 1134 // channel: regular

type GifSearchSessionStartedEvent struct {
	GifSearchProvider GIFSEARCHPROVIDER `wam:"gif_search_provider"` // field 1
}