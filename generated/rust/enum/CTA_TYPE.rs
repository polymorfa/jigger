#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CTATYPE {
    COPYCODE = 0,
    AUTOFILL = 1,
}