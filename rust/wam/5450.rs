pub const WAM_WEBC_SOCKET_CONNECT: u32 = 5450;

#[derive(Debug, Default)]
pub struct WebcSocketConnectEvent {
    /// field 1, wire `webc_auth_handshake_duration`
    pub webc_auth_handshake_duration: Option<String>,
    /// field 2, wire `webc_socket_connect_duration`
    pub webc_socket_connect_duration: Option<String>,
    /// field 3, wire `webc_socket_connect_reason`
    pub webc_socket_connect_reason: Option<WEBCSOCKETCONNECTREASONTYPE>,
    /// field 4, wire `webc_socket_hostname`
    pub webc_socket_hostname: Option<String>,
}