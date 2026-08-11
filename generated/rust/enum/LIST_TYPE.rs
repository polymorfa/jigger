#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LISTTYPE {
    NONE = 0,
    UNREAD = 1,
    GROUP = 2,
    FAVORITE = 3,
    PREDEFINED = 4,
    CUSTOM = 5,
    COMMUNITY = 6,
    BUSINESSAI = 7,
    DRAFTS = 8,
    CAMPAIGNREPLIES = 9,
    SERVERASSIGNED = 10,
}