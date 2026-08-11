pub const WAM_LOGIN: u32 = 460;

#[derive(Debug, Default)]
pub struct LoginEvent {
    /// field 1, wire `login_result`
    pub login_result: Option<LOGINRESULTTYPE>,
    /// field 2, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 3, wire `login_t`
    pub login_t: Option<String>,
    /// field 4, wire `long_connect`
    pub long_connect: Option<bool>,
    /// field 5, wire `connection_t`
    pub connection_t: Option<String>,
    /// field 6, wire `connection_origin`
    pub connection_origin: Option<CONNECTIONORIGINTYPE>,
    /// field 7, wire `sequence_step`
    pub sequence_step: Option<i64>,
    /// field 8, wire `passive`
    pub passive: Option<bool>,
    /// field 9, wire `server_error_code`
    pub server_error_code: Option<i64>,
    /// field 10, wire `android_keystore_state`
    pub android_keystore_state: Option<ANDROIDKEYSTORESTATETYPE>,
    /// field 11, wire `connection_sequence_step`
    pub connection_sequence_step: Option<CONNECTIONSEQUENCESTEPTYPE>,
    /// field 12, wire `dns_resolution_method`
    pub dns_resolution_method: Option<DNSRESOLUTIONMETHODTYPE>,
    /// field 13, wire `login_dns_resolver`
    pub login_dns_resolver: Option<LOGINDNSRESOLVERTYPE>,
    /// field 14, wire `login_ip_source`
    pub login_ip_source: Option<LOGINHOSTTYPE>,
    /// field 15, wire `login_port`
    pub login_port: Option<LOGINPORTNUMBER>,
    /// field 16, wire `noise_protocol_version`
    pub noise_protocol_version: Option<i64>,
    /// field 17, wire `pending_acks_count`
    pub pending_acks_count: Option<i64>,
    /// field 18, wire `logout_session_id`
    pub logout_session_id: Option<i64>,
    /// field 19, wire `login_resolved_pop`
    pub login_resolved_pop: Option<String>,
    /// field 20, wire `app_context`
    pub app_context: Option<String>,
    /// field 21, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 22, wire `login_socket_provider`
    pub login_socket_provider: Option<STREAMSOCKETPROVIDERTYPE>,
    /// field 23, wire `mns_dns_cache_age`
    pub mns_dns_cache_age: Option<i64>,
    /// field 24, wire `network_is_vpn`
    pub network_is_vpn: Option<bool>,
    /// field 25, wire `num_ipv4_addresses`
    pub num_ipv4_addresses: Option<i64>,
    /// field 26, wire `num_ipv6_addresses`
    pub num_ipv6_addresses: Option<i64>,
    /// field 27, wire `login_history_step_result`
    pub login_history_step_result: Option<bool>,
    /// field 28, wire `unprocessed_message_count`
    pub unprocessed_message_count: Option<i64>,
    /// field 29, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}