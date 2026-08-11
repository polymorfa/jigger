#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum IMPLEMENTATIONTYPE {
    NATIVE = 0,
    GENAI = 1,
}