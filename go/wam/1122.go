const WamGifSearchResultTapped = 1122 // channel: regular

type GifSearchResultTappedEvent struct {
	GifSearchProvider GIFSEARCHPROVIDER `wam:"gif_search_provider"` // field 1
	Rank int64 `wam:"rank"` // field 2
}