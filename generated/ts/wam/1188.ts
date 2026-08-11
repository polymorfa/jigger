export const WamWebcMemoryStat = 1188 as const

export interface WebcMemoryStatEvent {
  /** field 6, wire `uptime` */
  uptime?: string
  /** field 9, wire `js_heap_size_limit` */
  jsHeapSizeLimit?: number
  /** field 10, wire `total_js_heap_size` */
  totalJsHeapSize?: number
  /** field 11, wire `used_js_heap_size` */
  usedJsHeapSize?: number
  /** field 13, wire `is_foreground` */
  isForeground?: boolean
  /** field 14, wire `peak_used_js_heap_size` */
  peakUsedJsHeapSize?: number
  /** field 15, wire `scenario` */
  scenario?: WEBCSCENARIOTYPE
  /** field 16, wire `used_js_heap_size_delta` */
  usedJsHeapSizeDelta?: number
  /** field 17, wire `chat_collection_size` */
  chatCollectionSize?: number
  /** field 18, wire `chat_db_size` */
  chatDbSize?: number
  /** field 19, wire `contact_collection_size` */
  contactCollectionSize?: number
  /** field 20, wire `contact_db_size` */
  contactDbSize?: number
  /** field 23, wire `webc_runtime_env` */
  webcRuntimeEnv?: WEBCRUNTIMEENVCODE
  /** field 24, wire `message_collection_size` */
  messageCollectionSize?: number
  /** field 25, wire `message_db_size` */
  messageDbSize?: number
  /** field 26, wire `app_context` */
  appContext?: string
  /** field 27, wire `app_context_bitfield` */
  appContextBitfield?: number
}