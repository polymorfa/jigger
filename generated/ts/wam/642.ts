export const WamWebcPageLoad = 642 as const

export interface WebcPageLoadEvent {
  /** field 2, wire `webc_unload_event_start` */
  webcUnloadEventStart?: string
  /** field 3, wire `webc_unload_event_end` */
  webcUnloadEventEnd?: string
  /** field 4, wire `webc_redirect_start` */
  webcRedirectStart?: string
  /** field 5, wire `webc_redirect_end` */
  webcRedirectEnd?: string
  /** field 6, wire `webc_fetch_start` */
  webcFetchStart?: string
  /** field 7, wire `webc_domain_lookup_start` */
  webcDomainLookupStart?: string
  /** field 8, wire `webc_domain_lookup_end` */
  webcDomainLookupEnd?: string
  /** field 9, wire `webc_connect_start` */
  webcConnectStart?: string
  /** field 10, wire `webc_connect_end` */
  webcConnectEnd?: string
  /** field 11, wire `webc_secure_connection_start` */
  webcSecureConnectionStart?: string
  /** field 12, wire `webc_request_start` */
  webcRequestStart?: string
  /** field 13, wire `webc_response_start` */
  webcResponseStart?: string
  /** field 14, wire `webc_response_end` */
  webcResponseEnd?: string
  /** field 15, wire `webc_dom_loading` */
  webcDomLoading?: string
  /** field 16, wire `webc_dom_interactive` */
  webcDomInteractive?: string
  /** field 17, wire `webc_dom_content_loaded_event_start` */
  webcDomContentLoadedEventStart?: string
  /** field 18, wire `webc_dom_content_loaded_event_end` */
  webcDomContentLoadedEventEnd?: string
  /** field 19, wire `webc_dom_complete` */
  webcDomComplete?: string
  /** field 20, wire `webc_load_event_start` */
  webcLoadEventStart?: string
  /** field 21, wire `webc_load_event_end` */
  webcLoadEventEnd?: string
  /** field 22, wire `webc_exe_start` */
  webcExeStart?: string
  /** field 23, wire `webc_exe_done` */
  webcExeDone?: string
  /** field 24, wire `webc_ws_opening` */
  webcWsOpening?: string
  /** field 25, wire `webc_ws_pairing` */
  webcWsPairing?: string
  /** field 26, wire `webc_ws_syncing` */
  webcWsSyncing?: string
  /** field 27, wire `webc_ws_normal` */
  webcWsNormal?: string
  /** field 28, wire `webc_ws_attempts` */
  webcWsAttempts?: string
  /** field 29, wire `webc_appcache_status` */
  webcAppcacheStatus?: WEBCAPPCACHESTATUSCODE
  /** field 30, wire `webc_cached` */
  webcCached?: boolean
  /** field 31, wire `webc_qr_code` */
  webcQrCode?: boolean
  /** field 32, wire `webc_navigation` */
  webcNavigation?: WEBCNAVIGATIONTYPE
  /** field 33, wire `webc_redirect_count` */
  webcRedirectCount?: string
  /** field 34, wire `webc_page_load_t` */
  webcPageLoadT?: string
  /** field 36, wire `webc_native_load_t` */
  webcNativeLoadT?: string
  /** field 37, wire `webc_js_load_t` */
  webcJsLoadT?: string
  /** field 38, wire `webc_initial_mount_t` */
  webcInitialMountT?: string
  /** field 39, wire `webc_initial_nav_mount_t` */
  webcInitialNavMountT?: string
  /** field 40, wire `webc_initial_panel_mount_t` */
  webcInitialPanelMountT?: string
  /** field 41, wire `webc_parallelly_fetched` */
  webcParallellyFetched?: boolean
  /** field 42, wire `webc_initial_panel` */
  webcInitialPanel?: string
  /** field 43, wire `webc_initial_panel_mount_start_t` */
  webcInitialPanelMountStartT?: string
  /** field 44, wire `webc_main_script_start` */
  webcMainScriptStart?: string
  /** field 45, wire `webc_main_script_end` */
  webcMainScriptEnd?: string
  /** field 46, wire `webc_initial_panel_render_t` */
  webcInitialPanelRenderT?: string
  /** field 53, wire `webc_load_in_foreground` */
  webcLoadInForeground?: boolean
  /** field 54, wire `webc_page_load_id` */
  webcPageLoadId?: string
}