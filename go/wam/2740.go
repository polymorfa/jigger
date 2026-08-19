const WamStickerCommonQueryToStaticServer = 2740 // channel: regular

type StickerCommonQueryToStaticServerEvent struct {
	QueryType QUERYTYPE `wam:"query_type"` // field 1
	HttpResponseCode int64 `wam:"http_response_code"` // field 2
	Params string `wam:"params"` // field 3
	QueryLatencyMs string `wam:"query_latency_ms"` // field 4
}