pub const WAM_USER_NOTICE: u32 = 2472;

#[derive(Debug, Default)]
pub struct UserNoticeEvent {
    /// field 1, wire `user_notice_id`
    pub user_notice_id: Option<i64>,
    /// field 2, wire `user_notice_content_version`
    pub user_notice_content_version: Option<i64>,
    /// field 3, wire `user_notice_event`
    pub user_notice_event: Option<USERNOTICEEVENT>,
    /// field 4, wire `notice_type`
    pub notice_type: Option<NOTICETYPE>,
    /// field 5, wire `notice_triggered_by`
    pub notice_triggered_by: Option<NOTICETRIGGEREDBY>,
    /// field 6, wire `ts_ms`
    pub ts_ms: Option<String>,
}