#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NSMODE {
    NONE = 1,
    SOFTWARE = 2,
    BUILTIN = 3,
}