export const WamWebcAssetLoad = 1358 as const

export interface WebcAssetLoadEvent {
  /** field 1, wire `webc_asset_name` */
  webcAssetName?: string
  /** field 2, wire `webc_asset_from_cache` */
  webcAssetFromCache?: boolean
  /** field 3, wire `webc_asset_load_t` */
  webcAssetLoadT?: string
  /** field 4, wire `webc_asset_cache_type` */
  webcAssetCacheType?: WEBCASSETCACHETYPECODE
  /** field 5, wire `webc_asset_size` */
  webcAssetSize?: string
}