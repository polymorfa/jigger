#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SNACKBARACTIONTYPE {
    SNACKBARSHOWN = 0,
    MESSAGEUNDELETE = 1,
}