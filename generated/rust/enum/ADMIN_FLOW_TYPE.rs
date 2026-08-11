#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ADMINFLOWTYPE {
    CREATION = 1,
    EDIT = 2,
}