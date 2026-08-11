export const WamWebcFingerprint = 1704 as const

export interface WebcFingerprintEvent {
  /** field 21, wire `webc_window_navigator_webdriver` */
  webcWindowNavigatorWebdriver?: WEBCWINDOWNAVIGATORWEBDRIVERTYPE
  /** field 22, wire `webc_webgl_vendor` */
  webcWebglVendor?: string
  /** field 23, wire `webc_webgl_renderer` */
  webcWebglRenderer?: string
  /** field 24, wire `webc_webgl_fingerprint` */
  webcWebglFingerprint?: string
  /** field 25, wire `webc_canvas_fingerprint` */
  webcCanvasFingerprint?: string
  /** field 26, wire `browser_engine` */
  browserEngine?: BROWSERENGINENAME
  /** field 27, wire `extention_ids` */
  extentionIds?: string
  /** field 28, wire `has_chrome` */
  hasChrome?: boolean
  /** field 29, wire `has_taskbar` */
  hasTaskbar?: boolean
  /** field 30, wire `has_web_share` */
  hasWebShare?: boolean
  /** field 31, wire `mime_type_count` */
  mimeTypeCount?: number
  /** field 32, wire `notification_permission` */
  notificationPermission?: boolean
  /** field 33, wire `pdf_viewer_enabled` */
  pdfViewerEnabled?: boolean
  /** field 34, wire `platform_estimate` */
  platformEstimate?: PLATFORMNAME
  /** field 35, wire `plugin_count` */
  pluginCount?: number
  /** field 36, wire `external_sources` */
  externalSources?: string
  /** field 37, wire `connection_rtt` */
  connectionRtt?: number
  /** field 38, wire `cpu_make` */
  cpuMake?: string
  /** field 39, wire `device_memory` */
  deviceMemory?: string
  /** field 40, wire `gpu_make` */
  gpuMake?: string
  /** field 41, wire `history_length` */
  historyLength?: number
  /** field 42, wire `peripherals` */
  peripherals?: string
  /** field 43, wire `screen_resolution` */
  screenResolution?: string
  /** field 44, wire `session_storage_length` */
  sessionStorageLength?: number
  /** field 45, wire `timezone` */
  timezone?: string
  /** field 46, wire `touch_presence` */
  touchPresence?: boolean
  /** field 47, wire `viewport_size` */
  viewportSize?: string
  /** field 48, wire `wa_ul_cookie` */
  waUlCookie?: string
  /** field 49, wire `battery_level` */
  batteryLevel?: number
  /** field 50, wire `audio_fingerprint` */
  audioFingerprint?: string
  /** field 51, wire `automation_signals` */
  automationSignals?: string
  /** field 52, wire `chrome_structure` */
  chromeStructure?: string
  /** field 53, wire `permissions_consistency` */
  permissionsConsistency?: string
  /** field 54, wire `foreign_db_list` */
  foreignDbList?: string
}