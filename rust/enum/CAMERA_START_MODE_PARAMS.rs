#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CAMERASTARTMODEPARAMS {
    DEFAULT = 0,
    CONSERVATIVE = 1,
    STRICT = 2,
    ERROR = 11,
}