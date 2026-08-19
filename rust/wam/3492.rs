pub const WAM_COMMUNITY_CREATION: u32 = 3492;

#[derive(Debug, Default)]
pub struct CommunityCreationEvent {
    /// field 1, wire `community_creation_action_count`
    pub community_creation_action_count: Option<i64>,
    /// field 2, wire `community_creation_action_taken`
    pub community_creation_action_taken: Option<COMMUNITYCREATIONACTIONTAKENTYPE>,
    /// field 3, wire `community_creation_current_screen`
    pub community_creation_current_screen: Option<COMMUNITYCREATIONCURRENTSCREENTYPE>,
    /// field 4, wire `community_creation_session_id`
    pub community_creation_session_id: Option<String>,
    /// field 5, wire `community_creation_entrypoint`
    pub community_creation_entrypoint: Option<COMMUNITYCREATIONENTRYPOINTTYPE>,
    /// field 6, wire `community_id`
    pub community_id: Option<String>,
}