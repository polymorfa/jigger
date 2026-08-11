#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PTTTRIGGERTYPE {
    MANUAL = 0,
    SEQUENTIAL = 1,
}