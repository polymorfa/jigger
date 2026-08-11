pub const WAM_SUSPENDED_GROUP_DELETE: u32 = 4342;

#[derive(Debug, Default)]
pub struct SuspendedGroupDeleteEvent {
    /// field 1, wire `delete_btn_source`
    pub delete_btn_source: Option<DELETESUSPENDEDGROUPBTN>,
}