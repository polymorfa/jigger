#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPMEMBERTAGUPDATEACTIONTYPE {
    UPDATE = 1,
    DELETECONFIRM = 2,
    ERROR = 3,
}