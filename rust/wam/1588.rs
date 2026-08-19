pub const WAM_MEDIA_UPLOAD2: u32 = 1588;

#[derive(Debug, Default)]
pub struct MediaUpload2Event {
    /// field 1, wire `overall_media_type`
    pub overall_media_type: Option<MEDIATYPE>,
    /// field 3, wire `overall_retry_count`
    pub overall_retry_count: Option<i64>,
    /// field 4, wire `overall_attempt_count`
    pub overall_attempt_count: Option<i64>,
    /// field 5, wire `overall_domain`
    pub overall_domain: Option<String>,
    /// field 6, wire `overall_mms_version`
    pub overall_mms_version: Option<i64>,
    /// field 7, wire `overall_media_size`
    pub overall_media_size: Option<String>,
    /// field 8, wire `overall_t`
    pub overall_t: Option<String>,
    /// field 9, wire `overall_queue_t`
    pub overall_queue_t: Option<String>,
    /// field 10, wire `overall_conn_block_fetch_t`
    pub overall_conn_block_fetch_t: Option<String>,
    /// field 11, wire `overall_last_upload_retry_phase`
    pub overall_last_upload_retry_phase: Option<OVERALLLASTUPLOADRETRYPHASETYPE>,
    /// field 12, wire `overall_optimistic_flag`
    pub overall_optimistic_flag: Option<OPTIMISTICFLAGTYPE>,
    /// field 13, wire `overall_is_manual`
    pub overall_is_manual: Option<bool>,
    /// field 14, wire `overall_user_visible_t`
    pub overall_user_visible_t: Option<String>,
    /// field 15, wire `overall_transcode_t`
    pub overall_transcode_t: Option<String>,
    /// field 16, wire `overall_is_forward`
    pub overall_is_forward: Option<bool>,
    /// field 17, wire `resume_connect_t`
    pub resume_connect_t: Option<String>,
    /// field 18, wire `resume_network_t`
    pub resume_network_t: Option<String>,
    /// field 19, wire `resume_is_reuse`
    pub resume_is_reuse: Option<bool>,
    /// field 20, wire `resume_http_code`
    pub resume_http_code: Option<i64>,
    /// field 21, wire `upload_resume_point`
    pub upload_resume_point: Option<i64>,
    /// field 22, wire `upload_connect_t`
    pub upload_connect_t: Option<String>,
    /// field 23, wire `upload_network_t`
    pub upload_network_t: Option<String>,
    /// field 24, wire `upload_is_reuse`
    pub upload_is_reuse: Option<bool>,
    /// field 25, wire `upload_http_code`
    pub upload_http_code: Option<i64>,
    /// field 26, wire `upload_is_streaming`
    pub upload_is_streaming: Option<bool>,
    /// field 27, wire `upload_bytes_transferred`
    pub upload_bytes_transferred: Option<String>,
    /// field 28, wire `finalize_connect_t`
    pub finalize_connect_t: Option<String>,
    /// field 29, wire `finalize_network_t`
    pub finalize_network_t: Option<String>,
    /// field 30, wire `finalize_is_reuse`
    pub finalize_is_reuse: Option<bool>,
    /// field 31, wire `finalize_http_code`
    pub finalize_http_code: Option<i64>,
    /// field 32, wire `debug_media_ip`
    pub debug_media_ip: Option<String>,
    /// field 33, wire `debug_url`
    pub debug_url: Option<String>,
    /// field 34, wire `debug_media_exception`
    pub debug_media_exception: Option<String>,
    /// field 35, wire `overall_upload_result`
    pub overall_upload_result: Option<MEDIAUPLOADRESULTTYPE>,
    /// field 36, wire `overall_is_final`
    pub overall_is_final: Option<bool>,
    /// field 37, wire `overall_cum_t`
    pub overall_cum_t: Option<String>,
    /// field 38, wire `overall_cum_user_visible_t`
    pub overall_cum_user_visible_t: Option<String>,
    /// field 39, wire `overall_upload_mode`
    pub overall_upload_mode: Option<MEDIAUPLOADMODETYPE>,
    /// field 40, wire `overall_media_key_reuse`
    pub overall_media_key_reuse: Option<OVERALLMEDIAKEYREUSETYPE>,
    /// field 41, wire `overall_connection_class`
    pub overall_connection_class: Option<String>,
    /// field 42, wire `network_stack`
    pub network_stack: Option<NETWORKSTACKTYPE>,
    /// field 43, wire `connection_type`
    pub connection_type: Option<CONNECTIONTYPE>,
    /// field 44, wire `overall_upload_origin`
    pub overall_upload_origin: Option<UPLOADORIGINTYPE>,
    /// field 45, wire `estimated_bandwidth`
    pub estimated_bandwidth: Option<String>,
    /// field 46, wire `media_id`
    pub media_id: Option<i64>,
    /// field 47, wire `used_fallback_hint`
    pub used_fallback_hint: Option<String>,
    /// field 48, wire `upload_source`
    pub upload_source: Option<UPLOADSOURCETYPE>,
    /// field 49, wire `is_view_once`
    pub is_view_once: Option<bool>,
    /// field 50, wire `overall_encrypt_t`
    pub overall_encrypt_t: Option<String>,
    /// field 51, wire `http_protocol_version_type`
    pub http_protocol_version_type: Option<HTTPPROTOCOLVERSIONTYPE>,
    /// field 52, wire `photo_quality_setting`
    pub photo_quality_setting: Option<MEDIAQUALITY>,
    /// field 53, wire `original_size`
    pub original_size: Option<i64>,
    /// field 54, wire `video_quality_setting`
    pub video_quality_setting: Option<MEDIAQUALITY>,
    /// field 55, wire `file_height`
    pub file_height: Option<i64>,
    /// field 56, wire `file_width`
    pub file_width: Option<i64>,
    /// field 57, wire `batch_size`
    pub batch_size: Option<i64>,
    /// field 58, wire `message_key_hash`
    pub message_key_hash: Option<String>,
    /// field 60, wire `media_collection_id`
    pub media_collection_id: Option<i64>,
    /// field 61, wire `estimated_bandwidth_v2`
    pub estimated_bandwidth_v2: Option<String>,
    /// field 62, wire `paired_media_type`
    pub paired_media_type: Option<PAIREDMEDIATYPE>,
    /// field 63, wire `app_context`
    pub app_context: Option<String>,
    /// field 64, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
}