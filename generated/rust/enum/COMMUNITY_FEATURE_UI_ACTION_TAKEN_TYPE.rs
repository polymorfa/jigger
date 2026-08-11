#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum COMMUNITYFEATUREUIACTIONTAKENTYPE {
    ENTRY = 1,
    GROUPNAV = 2,
    GROUPADD = 3,
    COMMUNITYNAV = 4,
}