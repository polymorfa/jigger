export const WamLogin = 460 as const

export interface LoginEvent {
  /** field 1, wire `login_result` */
  loginResult?: LOGINRESULTTYPE
  /** field 2, wire `retry_count` */
  retryCount?: number
  /** field 3, wire `login_t` */
  loginT?: string
  /** field 4, wire `long_connect` */
  longConnect?: boolean
  /** field 5, wire `connection_t` */
  connectionT?: string
  /** field 6, wire `connection_origin` */
  connectionOrigin?: CONNECTIONORIGINTYPE
  /** field 7, wire `sequence_step` */
  sequenceStep?: number
  /** field 8, wire `passive` */
  passive?: boolean
  /** field 9, wire `server_error_code` */
  serverErrorCode?: number
  /** field 10, wire `android_keystore_state` */
  androidKeystoreState?: ANDROIDKEYSTORESTATETYPE
  /** field 11, wire `connection_sequence_step` */
  connectionSequenceStep?: CONNECTIONSEQUENCESTEPTYPE
  /** field 12, wire `dns_resolution_method` */
  dnsResolutionMethod?: DNSRESOLUTIONMETHODTYPE
  /** field 13, wire `login_dns_resolver` */
  loginDnsResolver?: LOGINDNSRESOLVERTYPE
  /** field 14, wire `login_ip_source` */
  loginIpSource?: LOGINHOSTTYPE
  /** field 15, wire `login_port` */
  loginPort?: LOGINPORTNUMBER
  /** field 16, wire `noise_protocol_version` */
  noiseProtocolVersion?: number
  /** field 17, wire `pending_acks_count` */
  pendingAcksCount?: number
  /** field 18, wire `logout_session_id` */
  logoutSessionId?: number
  /** field 19, wire `login_resolved_pop` */
  loginResolvedPop?: string
  /** field 20, wire `app_context` */
  appContext?: string
  /** field 21, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 22, wire `login_socket_provider` */
  loginSocketProvider?: STREAMSOCKETPROVIDERTYPE
  /** field 23, wire `mns_dns_cache_age` */
  mnsDnsCacheAge?: number
  /** field 24, wire `network_is_vpn` */
  networkIsVpn?: boolean
  /** field 25, wire `num_ipv4_addresses` */
  numIpv4Addresses?: number
  /** field 26, wire `num_ipv6_addresses` */
  numIpv6Addresses?: number
  /** field 27, wire `login_history_step_result` */
  loginHistoryStepResult?: boolean
  /** field 28, wire `unprocessed_message_count` */
  unprocessedMessageCount?: number
  /** field 29, wire `trace_id_int` */
  traceIdInt?: number
}