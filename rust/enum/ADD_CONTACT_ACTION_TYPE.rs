#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ADDCONTACTACTIONTYPE {
    OPEN = 0,
    SAVE = 1,
    CANCEL = 2,
    DELETE = 3,
    CREATEDUPLICATE = 4,
    PINSUBMIT = 5,
}