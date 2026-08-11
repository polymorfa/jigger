#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONTACTSUGGESTION {
    DEFAULT = 1,
    FREQUENTS = 2,
    RECENTS = 3,
    PINNED = 4,
    RANKER = 5,
}