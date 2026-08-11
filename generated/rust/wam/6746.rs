pub const WAM_SMB_QP_CALL_HEALTH: u32 = 6746;

#[derive(Debug, Default)]
pub struct SmbQpCallHealthEvent {
    /// field 1, wire `fetch_exception_message`
    pub fetch_exception_message: Option<String>,
    /// field 2, wire `fetch_mechanism`
    pub fetch_mechanism: Option<FETCHMECHANISMENUM>,
    /// field 3, wire `fetch_result`
    pub fetch_result: Option<FETCHRESULTENUM>,
}