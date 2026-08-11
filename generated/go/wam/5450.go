const WamWebcSocketConnect = 5450 // channel: regular

type WebcSocketConnectEvent struct {
	WebcAuthHandshakeDuration string `wam:"webc_auth_handshake_duration"` // field 1
	WebcSocketConnectDuration string `wam:"webc_socket_connect_duration"` // field 2
	WebcSocketConnectReason WEBCSOCKETCONNECTREASONTYPE `wam:"webc_socket_connect_reason"` // field 3
	WebcSocketHostname string `wam:"webc_socket_hostname"` // field 4
}