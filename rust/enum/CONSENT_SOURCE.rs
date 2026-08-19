#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CONSENTSOURCE {
    DISCLOSURE = 0,
    ACCOUNTLINKING = 1,
}