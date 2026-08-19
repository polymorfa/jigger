#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PQFALLBACKREASON {
    UNKNOWN = 0,
    PQNOSESSIONREGULARFALLBACK = 1,
    PQSESSIONDELETEDKEYLESSRETRY = 2,
}