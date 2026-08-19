pub const WAM_SEARCH_USER_JOURNEY: u32 = 6358;

#[derive(Debug, Default)]
pub struct SearchUserJourneyEvent {
    /// field 1, wire `search_uj_ai_suggestion_count`
    pub search_uj_ai_suggestion_count: Option<i64>,
    /// field 2, wire `search_uj_biz_count`
    pub search_uj_biz_count: Option<i64>,
    /// field 3, wire `search_uj_chats_count`
    pub search_uj_chats_count: Option<i64>,
    /// field 4, wire `search_uj_contacts_count`
    pub search_uj_contacts_count: Option<i64>,
    /// field 5, wire `search_uj_criteria_type`
    pub search_uj_criteria_type: Option<SEARCHUJCRITERIATYPE>,
    /// field 6, wire `search_uj_dismiss_type`
    pub search_uj_dismiss_type: Option<SEARCHUJDISMISSTYPE>,
    /// field 7, wire `search_uj_filter_count`
    pub search_uj_filter_count: Option<i64>,
    /// field 8, wire `search_uj_filter_type`
    pub search_uj_filter_type: Option<SEARCHUJFILTERTYPE>,
    /// field 9, wire `search_uj_groups_in_common_count`
    pub search_uj_groups_in_common_count: Option<i64>,
    /// field 10, wire `search_uj_has_fuzzy_results`
    pub search_uj_has_fuzzy_results: Option<bool>,
    /// field 11, wire `search_uj_item_type`
    pub search_uj_item_type: Option<SEARCHUJITEMTYPE>,
    /// field 12, wire `search_uj_messages_count`
    pub search_uj_messages_count: Option<i64>,
    /// field 13, wire `search_uj_result_count`
    pub search_uj_result_count: Option<i64>,
    /// field 14, wire `search_uj_selected_item_rank`
    pub search_uj_selected_item_rank: Option<i64>,
    /// field 15, wire `search_use_case`
    pub search_use_case: Option<SEARCHUSECASE>,
    /// field 16, wire `search_user_journey_action`
    pub search_user_journey_action: Option<SEARCHUSERJOURNEYACTION>,
    /// field 17, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 18, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 19, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 20, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 21, wire `search_fts_and_semantic_messages_count`
    pub search_fts_and_semantic_messages_count: Option<i64>,
    /// field 22, wire `search_fts_messages_count`
    pub search_fts_messages_count: Option<i64>,
    /// field 23, wire `search_has_semantic_search_results`
    pub search_has_semantic_search_results: Option<bool>,
    /// field 24, wire `search_selected_message_source`
    pub search_selected_message_source: Option<SEARCHSELECTEDMESSAGESOURCE>,
    /// field 25, wire `search_semantic_messages_count`
    pub search_semantic_messages_count: Option<i64>,
    /// field 26, wire `search_session_query_id`
    pub search_session_query_id: Option<String>,
    /// field 27, wire `search_unique_session_id`
    pub search_unique_session_id: Option<String>,
    /// field 28, wire `selected_message_distance`
    pub selected_message_distance: Option<String>,
    /// field 29, wire `search_uj_recent_searches_group_count`
    pub search_uj_recent_searches_group_count: Option<i64>,
    /// field 30, wire `search_uj_recent_searches_individual_count`
    pub search_uj_recent_searches_individual_count: Option<i64>,
    /// field 31, wire `search_uj_invite_count`
    pub search_uj_invite_count: Option<i64>,
    /// field 32, wire `search_ds_send_content_type`
    pub search_ds_send_content_type: Option<SEARCHDSSENDCONTENTTYPE>,
    /// field 33, wire `search_ds_time_spent_ms`
    pub search_ds_time_spent_ms: Option<i64>,
    /// field 34, wire `search_uj_pushnames_count`
    pub search_uj_pushnames_count: Option<i64>,
}