export const WamStickerCommonQueryToStaticServer = 2740 as const

export interface StickerCommonQueryToStaticServerEvent {
  /** field 1, wire `query_type` */
  queryType?: QUERYTYPE
  /** field 2, wire `http_response_code` */
  httpResponseCode?: number
  /** field 3, wire `params` */
  params?: string
  /** field 4, wire `query_latency_ms` */
  queryLatencyMs?: string
}