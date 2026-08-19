pub const WAM_THREAD_INTERACTION_DATA_AI: u32 = 6410;

#[derive(Debug, Default)]
pub struct ThreadInteractionDataAiEvent {
    /// field 1, wire `ai_chat_origins`
    pub ai_chat_origins: Option<AICHATORIGINSTYPE>,
    /// field 2, wire `bottom_sheet_animated_sent`
    pub bottom_sheet_animated_sent: Option<i64>,
    /// field 3, wire `bottom_sheet_edited_animated_sent`
    pub bottom_sheet_edited_animated_sent: Option<i64>,
    /// field 4, wire `bottom_sheet_edited_sent`
    pub bottom_sheet_edited_sent: Option<i64>,
    /// field 5, wire `bottom_sheet_images_generated`
    pub bottom_sheet_images_generated: Option<i64>,
    /// field 6, wire `bottom_sheet_memu_initiated`
    pub bottom_sheet_memu_initiated: Option<i64>,
    /// field 7, wire `bottom_sheet_memu_messages_sent`
    pub bottom_sheet_memu_messages_sent: Option<i64>,
    /// field 8, wire `bottom_sheet_messages_sent`
    pub bottom_sheet_messages_sent: Option<i64>,
    /// field 9, wire `bottom_sheet_prompts_initiated`
    pub bottom_sheet_prompts_initiated: Option<i64>,
    /// field 10, wire `bottom_sheet_regenerated_sent`
    pub bottom_sheet_regenerated_sent: Option<i64>,
    /// field 11, wire `command_sheet_show`
    pub command_sheet_show: Option<i64>,
    /// field 14, wire `imagine_command_click`
    pub imagine_command_click: Option<i64>,
    /// field 15, wire `imagine_me_messages_sent`
    pub imagine_me_messages_sent: Option<i64>,
    /// field 16, wire `imagine_me_prompts_initiated_count`
    pub imagine_me_prompts_initiated_count: Option<i64>,
    /// field 17, wire `thread_ds`
    pub thread_ds: Option<String>,
    /// field 19, wire `meta_ai_mention_click`
    pub meta_ai_mention_click: Option<i64>,
    /// field 20, wire `meta_ai_mention_show`
    pub meta_ai_mention_show: Option<i64>,
    /// field 21, wire `suggestion_prompts_click`
    pub suggestion_prompts_click: Option<i64>,
    /// field 22, wire `suggestion_prompts_show`
    pub suggestion_prompts_show: Option<i64>,
    /// field 24, wire `total_message_from_agent_cnt`
    pub total_message_from_agent_cnt: Option<i64>,
    /// field 25, wire `total_message_to_agent_cnt`
    pub total_message_to_agent_cnt: Option<i64>,
    /// field 26, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 27, wire `thread_id_by_lid`
    pub thread_id_by_lid: Option<String>,
    /// field 28, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
    /// field 29, wire `ai_discovery_tab`
    pub ai_discovery_tab: Option<String>,
}