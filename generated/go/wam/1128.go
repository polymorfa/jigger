const WamGifSearchNoResults = 1128 // channel: regular

type GifSearchNoResultsEvent struct {
	GifSearchProvider GIFSEARCHPROVIDER `wam:"gif_search_provider"` // field 1
	LanguageCode string `wam:"language_code"` // field 2
	InputLanguageCode string `wam:"input_language_code"` // field 3
}