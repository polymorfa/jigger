#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum COREEVENTTRIGGERTYPE {
    USER = 1,
    REPORT = 2,
}