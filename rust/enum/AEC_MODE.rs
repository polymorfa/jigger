#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AECMODE {
    NONE = 1,
    SOFTWARE = 2,
    BUILTIN = 3,
}