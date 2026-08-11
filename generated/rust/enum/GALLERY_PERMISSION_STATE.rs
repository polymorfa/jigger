#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GALLERYPERMISSIONSTATE {
    FULL = 1,
    PARTIAL = 2,
    NONE = 3,
}