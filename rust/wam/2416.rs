pub const WAM_WEBC_RAW_PLATFORMS: u32 = 2416;

#[derive(Debug, Default)]
pub struct WebcRawPlatformsEvent {
    /// field 1, wire `webc_raw_platform`
    pub webc_raw_platform: Option<String>,
}