const WamLogin = 460 // channel: regular

type LoginEvent struct {
	LoginResult LOGINRESULTTYPE `wam:"login_result"` // field 1
	RetryCount int64 `wam:"retry_count"` // field 2
	LoginT string `wam:"login_t"` // field 3
	LongConnect bool `wam:"long_connect"` // field 4
	ConnectionT string `wam:"connection_t"` // field 5
	ConnectionOrigin CONNECTIONORIGINTYPE `wam:"connection_origin"` // field 6
	SequenceStep int64 `wam:"sequence_step"` // field 7
	Passive bool `wam:"passive"` // field 8
	ServerErrorCode int64 `wam:"server_error_code"` // field 9
	AndroidKeystoreState ANDROIDKEYSTORESTATETYPE `wam:"android_keystore_state"` // field 10
	ConnectionSequenceStep CONNECTIONSEQUENCESTEPTYPE `wam:"connection_sequence_step"` // field 11
	DnsResolutionMethod DNSRESOLUTIONMETHODTYPE `wam:"dns_resolution_method"` // field 12
	LoginDnsResolver LOGINDNSRESOLVERTYPE `wam:"login_dns_resolver"` // field 13
	LoginIpSource LOGINHOSTTYPE `wam:"login_ip_source"` // field 14
	LoginPort LOGINPORTNUMBER `wam:"login_port"` // field 15
	NoiseProtocolVersion int64 `wam:"noise_protocol_version"` // field 16
	PendingAcksCount int64 `wam:"pending_acks_count"` // field 17
	LogoutSessionId int64 `wam:"logout_session_id"` // field 18
	LoginResolvedPop string `wam:"login_resolved_pop"` // field 19
	AppContext string `wam:"app_context"` // field 20
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 21
	LoginSocketProvider STREAMSOCKETPROVIDERTYPE `wam:"login_socket_provider"` // field 22
	MnsDnsCacheAge int64 `wam:"mns_dns_cache_age"` // field 23
	NetworkIsVpn bool `wam:"network_is_vpn"` // field 24
	NumIpv4Addresses int64 `wam:"num_ipv4_addresses"` // field 25
	NumIpv6Addresses int64 `wam:"num_ipv6_addresses"` // field 26
	LoginHistoryStepResult bool `wam:"login_history_step_result"` // field 27
	UnprocessedMessageCount int64 `wam:"unprocessed_message_count"` // field 28
	TraceIdInt int64 `wam:"trace_id_int"` // field 29
}