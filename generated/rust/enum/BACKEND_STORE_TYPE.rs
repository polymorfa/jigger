#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BACKENDSTORETYPE {
    UNKNOWN = 0,
    NONDIRECTPATH = 1,
    EVERSTORE = 2,
    OIL = 3,
    EXPRESSPATH = 4,
    STATIC = 5,
    MANIFOLD = 6,
}