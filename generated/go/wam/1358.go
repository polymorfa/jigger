const WamWebcAssetLoad = 1358 // channel: regular

type WebcAssetLoadEvent struct {
	WebcAssetName string `wam:"webc_asset_name"` // field 1
	WebcAssetFromCache bool `wam:"webc_asset_from_cache"` // field 2
	WebcAssetLoadT string `wam:"webc_asset_load_t"` // field 3
	WebcAssetCacheType WEBCASSETCACHETYPECODE `wam:"webc_asset_cache_type"` // field 4
	WebcAssetSize string `wam:"webc_asset_size"` // field 5
}