#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSCATEGORY {
    REGULARSTATUS = 1,
    GROUPSTATUS = 2,
    CHANNELSTATUS = 3,
    ENGAGEMENTCARD = 4,
}