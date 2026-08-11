#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CALLRELAYBINDSTATUS {
    UNBOUND = 1,
    BINDED = 2,
}