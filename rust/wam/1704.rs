pub const WAM_WEBC_FINGERPRINT: u32 = 1704;

#[derive(Debug, Default)]
pub struct WebcFingerprintEvent {
    /// field 21, wire `webc_window_navigator_webdriver`
    pub webc_window_navigator_webdriver: Option<WEBCWINDOWNAVIGATORWEBDRIVERTYPE>,
    /// field 22, wire `webc_webgl_vendor`
    pub webc_webgl_vendor: Option<String>,
    /// field 23, wire `webc_webgl_renderer`
    pub webc_webgl_renderer: Option<String>,
    /// field 24, wire `webc_webgl_fingerprint`
    pub webc_webgl_fingerprint: Option<String>,
    /// field 25, wire `webc_canvas_fingerprint`
    pub webc_canvas_fingerprint: Option<String>,
    /// field 26, wire `browser_engine`
    pub browser_engine: Option<BROWSERENGINENAME>,
    /// field 27, wire `extention_ids`
    pub extention_ids: Option<String>,
    /// field 28, wire `has_chrome`
    pub has_chrome: Option<bool>,
    /// field 29, wire `has_taskbar`
    pub has_taskbar: Option<bool>,
    /// field 30, wire `has_web_share`
    pub has_web_share: Option<bool>,
    /// field 31, wire `mime_type_count`
    pub mime_type_count: Option<i64>,
    /// field 32, wire `notification_permission`
    pub notification_permission: Option<bool>,
    /// field 33, wire `pdf_viewer_enabled`
    pub pdf_viewer_enabled: Option<bool>,
    /// field 34, wire `platform_estimate`
    pub platform_estimate: Option<PLATFORMNAME>,
    /// field 35, wire `plugin_count`
    pub plugin_count: Option<i64>,
    /// field 36, wire `external_sources`
    pub external_sources: Option<String>,
    /// field 37, wire `connection_rtt`
    pub connection_rtt: Option<i64>,
    /// field 38, wire `cpu_make`
    pub cpu_make: Option<String>,
    /// field 39, wire `device_memory`
    pub device_memory: Option<String>,
    /// field 40, wire `gpu_make`
    pub gpu_make: Option<String>,
    /// field 41, wire `history_length`
    pub history_length: Option<i64>,
    /// field 42, wire `peripherals`
    pub peripherals: Option<String>,
    /// field 43, wire `screen_resolution`
    pub screen_resolution: Option<String>,
    /// field 44, wire `session_storage_length`
    pub session_storage_length: Option<i64>,
    /// field 45, wire `timezone`
    pub timezone: Option<String>,
    /// field 46, wire `touch_presence`
    pub touch_presence: Option<bool>,
    /// field 47, wire `viewport_size`
    pub viewport_size: Option<String>,
    /// field 48, wire `wa_ul_cookie`
    pub wa_ul_cookie: Option<String>,
    /// field 49, wire `battery_level`
    pub battery_level: Option<i64>,
    /// field 50, wire `audio_fingerprint`
    pub audio_fingerprint: Option<String>,
    /// field 51, wire `automation_signals`
    pub automation_signals: Option<String>,
    /// field 52, wire `chrome_structure`
    pub chrome_structure: Option<String>,
    /// field 53, wire `permissions_consistency`
    pub permissions_consistency: Option<String>,
    /// field 54, wire `foreign_db_list`
    pub foreign_db_list: Option<String>,
}