const WamWindowsDefaultProtocolActivation = 8504 // channel: regular

type WindowsDefaultProtocolActivationEvent struct {
	DefaultProtocolResult DEFAULTPROTOCOLRESULTTYPE `wam:"default_protocol_result"` // field 1
	DefaultProtocolScheme DEFAULTPROTOCOLSCHEMETYPE `wam:"default_protocol_scheme"` // field 2
	DefaultProtocolTarget DEFAULTPROTOCOLTARGETTYPE `wam:"default_protocol_target"` // field 3
	TsTimestampMs int64 `wam:"ts_timestamp_ms"` // field 4
}