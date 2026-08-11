const WamWebcFingerprint = 1704 // channel: regular

type WebcFingerprintEvent struct {
	WebcWindowNavigatorWebdriver WEBCWINDOWNAVIGATORWEBDRIVERTYPE `wam:"webc_window_navigator_webdriver"` // field 21
	WebcWebglVendor string `wam:"webc_webgl_vendor"` // field 22
	WebcWebglRenderer string `wam:"webc_webgl_renderer"` // field 23
	WebcWebglFingerprint string `wam:"webc_webgl_fingerprint"` // field 24
	WebcCanvasFingerprint string `wam:"webc_canvas_fingerprint"` // field 25
	BrowserEngine BROWSERENGINENAME `wam:"browser_engine"` // field 26
	ExtentionIds string `wam:"extention_ids"` // field 27
	HasChrome bool `wam:"has_chrome"` // field 28
	HasTaskbar bool `wam:"has_taskbar"` // field 29
	HasWebShare bool `wam:"has_web_share"` // field 30
	MimeTypeCount int64 `wam:"mime_type_count"` // field 31
	NotificationPermission bool `wam:"notification_permission"` // field 32
	PdfViewerEnabled bool `wam:"pdf_viewer_enabled"` // field 33
	PlatformEstimate PLATFORMNAME `wam:"platform_estimate"` // field 34
	PluginCount int64 `wam:"plugin_count"` // field 35
	ExternalSources string `wam:"external_sources"` // field 36
	ConnectionRtt int64 `wam:"connection_rtt"` // field 37
	CpuMake string `wam:"cpu_make"` // field 38
	DeviceMemory string `wam:"device_memory"` // field 39
	GpuMake string `wam:"gpu_make"` // field 40
	HistoryLength int64 `wam:"history_length"` // field 41
	Peripherals string `wam:"peripherals"` // field 42
	ScreenResolution string `wam:"screen_resolution"` // field 43
	SessionStorageLength int64 `wam:"session_storage_length"` // field 44
	Timezone string `wam:"timezone"` // field 45
	TouchPresence bool `wam:"touch_presence"` // field 46
	ViewportSize string `wam:"viewport_size"` // field 47
	WaUlCookie string `wam:"wa_ul_cookie"` // field 48
	BatteryLevel int64 `wam:"battery_level"` // field 49
	AudioFingerprint string `wam:"audio_fingerprint"` // field 50
	AutomationSignals string `wam:"automation_signals"` // field 51
	ChromeStructure string `wam:"chrome_structure"` // field 52
	PermissionsConsistency string `wam:"permissions_consistency"` // field 53
	ForeignDbList string `wam:"foreign_db_list"` // field 54
}