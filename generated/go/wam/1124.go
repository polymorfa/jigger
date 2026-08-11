const WamGifFromProviderSent = 1124 // channel: regular

type GifFromProviderSentEvent struct {
	GifSearchProvider GIFSEARCHPROVIDER `wam:"gif_search_provider"` // field 1
}