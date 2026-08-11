#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBHYBRIDAPPRATEANDREVIEWPROMPTDIALOGSTATUSRESULT {
    CONFIRMED = 0,
    CLOSED = 1,
    DISMISSED = 2,
    SIDELOADED = 3,
}