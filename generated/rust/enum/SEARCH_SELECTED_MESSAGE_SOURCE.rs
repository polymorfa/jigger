#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SEARCHSELECTEDMESSAGESOURCE {
    FTS = 1,
    SEMANTIC = 2,
    FTSANDSEMANTIC = 3,
}