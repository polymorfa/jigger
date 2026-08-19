#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DELETEACTIONTYPE {
    DELETEFORME = 0,
    DELETEFOREVERYONE = 1,
}