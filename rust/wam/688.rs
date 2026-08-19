pub const WAM_WEBC_RESOURCE_LOAD: u32 = 688;

#[derive(Debug, Default)]
pub struct WebcResourceLoadEvent {
    /// field 1, wire `webc_resource_name`
    pub webc_resource_name: Option<String>,
    /// field 2, wire `webc_resource_duration`
    pub webc_resource_duration: Option<String>,
    /// field 3, wire `webc_resource_cached`
    pub webc_resource_cached: Option<bool>,
}