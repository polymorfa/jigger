pub const WAM_CADMIN_DEMOTE: u32 = 3426;

#[derive(Debug, Default)]
pub struct CadminDemoteEvent {
    /// field 1, wire `cadmin_demote_origin`
    pub cadmin_demote_origin: Option<CADMINDEMOTEORIGINTYPE>,
    /// field 2, wire `cadmin_demote_result`
    pub cadmin_demote_result: Option<CADMINDEMOTERESULTTYPE>,
    /// field 4, wire `is_last_cadmin_or_creator`
    pub is_last_cadmin_or_creator: Option<bool>,
}