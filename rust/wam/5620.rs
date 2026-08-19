pub const WAM_IMAGINE_ACTIONS: u32 = 5620;

#[derive(Debug, Default)]
pub struct ImagineActionsEvent {
    /// field 1, wire `imagine_action`
    pub imagine_action: Option<IMAGINEACTION>,
    /// field 3, wire `imagine_action_source`
    pub imagine_action_source: Option<IMAGINEACTIONSOURCE>,
    /// field 4, wire `imagine_action_target`
    pub imagine_action_target: Option<IMAGINEACTIONTARGET>,
    /// field 5, wire `imagine_action_thread_type`
    pub imagine_action_thread_type: Option<IMAGINEACTIONTHREADTYPE>,
    /// field 6, wire `is_cancelled`
    pub is_cancelled: Option<bool>,
    /// field 7, wire `is_sent`
    pub is_sent: Option<bool>,
    /// field 8, wire `imagine_action_duration`
    pub imagine_action_duration: Option<String>,
    /// field 9, wire `max_index`
    pub max_index: Option<i64>,
    /// field 10, wire `selected_image_index`
    pub selected_image_index: Option<i64>,
    /// field 11, wire `implementation_type`
    pub implementation_type: Option<IMPLEMENTATIONTYPE>,
    /// field 12, wire `imagine_media_type`
    pub imagine_media_type: Option<IMAGINEMEDIATYPE>,
    /// field 13, wire `imagine_action_source_subtype`
    pub imagine_action_source_subtype: Option<IMAGINEACTIONSOURCESUBTYPE>,
    /// field 14, wire `ai_session_id`
    pub ai_session_id: Option<String>,
    /// field 15, wire `thread_session_id`
    pub thread_session_id: Option<String>,
    /// field 16, wire `meta_ai_conversation_thread_id`
    pub meta_ai_conversation_thread_id: Option<String>,
    /// field 17, wire `text_modality`
    pub text_modality: Option<TEXTMODALITYTYPE>,
    /// field 18, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}