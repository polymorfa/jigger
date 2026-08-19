#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLSTABSOURCE {
    NOTIFICATION = 1,
    SWITCH = 2,
    LAUNCH = 3,
    NONE = 4,
    OSCALLLOG = 5,
}