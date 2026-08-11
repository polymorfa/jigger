pub const WAM_WEBC_PAGE_LOAD: u32 = 642;

#[derive(Debug, Default)]
pub struct WebcPageLoadEvent {
    /// field 2, wire `webc_unload_event_start`
    pub webc_unload_event_start: Option<String>,
    /// field 3, wire `webc_unload_event_end`
    pub webc_unload_event_end: Option<String>,
    /// field 4, wire `webc_redirect_start`
    pub webc_redirect_start: Option<String>,
    /// field 5, wire `webc_redirect_end`
    pub webc_redirect_end: Option<String>,
    /// field 6, wire `webc_fetch_start`
    pub webc_fetch_start: Option<String>,
    /// field 7, wire `webc_domain_lookup_start`
    pub webc_domain_lookup_start: Option<String>,
    /// field 8, wire `webc_domain_lookup_end`
    pub webc_domain_lookup_end: Option<String>,
    /// field 9, wire `webc_connect_start`
    pub webc_connect_start: Option<String>,
    /// field 10, wire `webc_connect_end`
    pub webc_connect_end: Option<String>,
    /// field 11, wire `webc_secure_connection_start`
    pub webc_secure_connection_start: Option<String>,
    /// field 12, wire `webc_request_start`
    pub webc_request_start: Option<String>,
    /// field 13, wire `webc_response_start`
    pub webc_response_start: Option<String>,
    /// field 14, wire `webc_response_end`
    pub webc_response_end: Option<String>,
    /// field 15, wire `webc_dom_loading`
    pub webc_dom_loading: Option<String>,
    /// field 16, wire `webc_dom_interactive`
    pub webc_dom_interactive: Option<String>,
    /// field 17, wire `webc_dom_content_loaded_event_start`
    pub webc_dom_content_loaded_event_start: Option<String>,
    /// field 18, wire `webc_dom_content_loaded_event_end`
    pub webc_dom_content_loaded_event_end: Option<String>,
    /// field 19, wire `webc_dom_complete`
    pub webc_dom_complete: Option<String>,
    /// field 20, wire `webc_load_event_start`
    pub webc_load_event_start: Option<String>,
    /// field 21, wire `webc_load_event_end`
    pub webc_load_event_end: Option<String>,
    /// field 22, wire `webc_exe_start`
    pub webc_exe_start: Option<String>,
    /// field 23, wire `webc_exe_done`
    pub webc_exe_done: Option<String>,
    /// field 24, wire `webc_ws_opening`
    pub webc_ws_opening: Option<String>,
    /// field 25, wire `webc_ws_pairing`
    pub webc_ws_pairing: Option<String>,
    /// field 26, wire `webc_ws_syncing`
    pub webc_ws_syncing: Option<String>,
    /// field 27, wire `webc_ws_normal`
    pub webc_ws_normal: Option<String>,
    /// field 28, wire `webc_ws_attempts`
    pub webc_ws_attempts: Option<String>,
    /// field 29, wire `webc_appcache_status`
    pub webc_appcache_status: Option<WEBCAPPCACHESTATUSCODE>,
    /// field 30, wire `webc_cached`
    pub webc_cached: Option<bool>,
    /// field 31, wire `webc_qr_code`
    pub webc_qr_code: Option<bool>,
    /// field 32, wire `webc_navigation`
    pub webc_navigation: Option<WEBCNAVIGATIONTYPE>,
    /// field 33, wire `webc_redirect_count`
    pub webc_redirect_count: Option<String>,
    /// field 34, wire `webc_page_load_t`
    pub webc_page_load_t: Option<String>,
    /// field 36, wire `webc_native_load_t`
    pub webc_native_load_t: Option<String>,
    /// field 37, wire `webc_js_load_t`
    pub webc_js_load_t: Option<String>,
    /// field 38, wire `webc_initial_mount_t`
    pub webc_initial_mount_t: Option<String>,
    /// field 39, wire `webc_initial_nav_mount_t`
    pub webc_initial_nav_mount_t: Option<String>,
    /// field 40, wire `webc_initial_panel_mount_t`
    pub webc_initial_panel_mount_t: Option<String>,
    /// field 41, wire `webc_parallelly_fetched`
    pub webc_parallelly_fetched: Option<bool>,
    /// field 42, wire `webc_initial_panel`
    pub webc_initial_panel: Option<String>,
    /// field 43, wire `webc_initial_panel_mount_start_t`
    pub webc_initial_panel_mount_start_t: Option<String>,
    /// field 44, wire `webc_main_script_start`
    pub webc_main_script_start: Option<String>,
    /// field 45, wire `webc_main_script_end`
    pub webc_main_script_end: Option<String>,
    /// field 46, wire `webc_initial_panel_render_t`
    pub webc_initial_panel_render_t: Option<String>,
    /// field 53, wire `webc_load_in_foreground`
    pub webc_load_in_foreground: Option<bool>,
    /// field 54, wire `webc_page_load_id`
    pub webc_page_load_id: Option<String>,
}