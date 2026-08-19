#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ENUMALREADYCLAIMEDEXPIREDINVALIDNOTFOUNDNOTOWNEDVALID {
    AlreadyClaimed,
    Expired,
    Invalid,
    NotFound,
    NotOwned,
    Valid,
}