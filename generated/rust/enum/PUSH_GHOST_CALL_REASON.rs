#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PUSHGHOSTCALLREASON {
    OFFERELAPSED = 0,
    OFFLINETERMINATE = 1,
    OFFLINEMDREJECT = 2,
    OFFLINEMDACCEPT = 3,
}