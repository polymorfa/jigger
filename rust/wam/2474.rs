pub const WAM_USER_NOTICE_ERROR: u32 = 2474;

#[derive(Debug, Default)]
pub struct UserNoticeErrorEvent {
    /// field 1, wire `user_notice_id`
    pub user_notice_id: Option<i64>,
    /// field 2, wire `user_notice_content_version`
    pub user_notice_content_version: Option<i64>,
    /// field 3, wire `user_notice_error_event`
    pub user_notice_error_event: Option<USERNOTICEERROREVENT>,
    /// field 4, wire `notice_type`
    pub notice_type: Option<NOTICETYPE>,
}