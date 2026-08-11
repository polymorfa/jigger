const WamWebcMemoryStat = 1188 // channel: regular

type WebcMemoryStatEvent struct {
	Uptime string `wam:"uptime"` // field 6
	JsHeapSizeLimit int64 `wam:"js_heap_size_limit"` // field 9
	TotalJsHeapSize int64 `wam:"total_js_heap_size"` // field 10
	UsedJsHeapSize int64 `wam:"used_js_heap_size"` // field 11
	IsForeground bool `wam:"is_foreground"` // field 13
	PeakUsedJsHeapSize int64 `wam:"peak_used_js_heap_size"` // field 14
	Scenario WEBCSCENARIOTYPE `wam:"scenario"` // field 15
	UsedJsHeapSizeDelta int64 `wam:"used_js_heap_size_delta"` // field 16
	ChatCollectionSize int64 `wam:"chat_collection_size"` // field 17
	ChatDbSize int64 `wam:"chat_db_size"` // field 18
	ContactCollectionSize int64 `wam:"contact_collection_size"` // field 19
	ContactDbSize int64 `wam:"contact_db_size"` // field 20
	WebcRuntimeEnv WEBCRUNTIMEENVCODE `wam:"webc_runtime_env"` // field 23
	MessageCollectionSize int64 `wam:"message_collection_size"` // field 24
	MessageDbSize int64 `wam:"message_db_size"` // field 25
	AppContext string `wam:"app_context"` // field 26
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 27
}