#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RINGTONEENTRYTYPE {
    APPWIDE = 0,
    ONETOONE = 1,
    GROUP = 2,
    LIST = 3,
}