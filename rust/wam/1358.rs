pub const WAM_WEBC_ASSET_LOAD: u32 = 1358;

#[derive(Debug, Default)]
pub struct WebcAssetLoadEvent {
    /// field 1, wire `webc_asset_name`
    pub webc_asset_name: Option<String>,
    /// field 2, wire `webc_asset_from_cache`
    pub webc_asset_from_cache: Option<bool>,
    /// field 3, wire `webc_asset_load_t`
    pub webc_asset_load_t: Option<String>,
    /// field 4, wire `webc_asset_cache_type`
    pub webc_asset_cache_type: Option<WEBCASSETCACHETYPECODE>,
    /// field 5, wire `webc_asset_size`
    pub webc_asset_size: Option<String>,
}