pub const WAM_STICKER_COMMON_QUERY_TO_STATIC_SERVER: u32 = 2740;

#[derive(Debug, Default)]
pub struct StickerCommonQueryToStaticServerEvent {
    /// field 1, wire `query_type`
    pub query_type: Option<QUERYTYPE>,
    /// field 2, wire `http_response_code`
    pub http_response_code: Option<i64>,
    /// field 3, wire `params`
    pub params: Option<String>,
    /// field 4, wire `query_latency_ms`
    pub query_latency_ms: Option<String>,
}