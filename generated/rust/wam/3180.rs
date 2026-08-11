pub const WAM_MD_APP_STATE_SYNC_MUTATION_STATS: u32 = 3180;

#[derive(Debug, Default)]
pub struct MdAppStateSyncMutationStatsEvent {
    /// field 1, wire `applied`
    pub applied: Option<MUTATIONCOUNTBUCKET>,
    /// field 2, wire `failed`
    pub failed: Option<MUTATIONCOUNTBUCKET>,
    /// field 3, wire `invalid`
    pub invalid: Option<MUTATIONCOUNTBUCKET>,
    /// field 4, wire `orphan`
    pub orphan: Option<MUTATIONCOUNTBUCKET>,
    /// field 5, wire `syncd_action`
    pub syncd_action: Option<String>,
    /// field 6, wire `unsupported`
    pub unsupported: Option<MUTATIONCOUNTBUCKET>,
}