#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VIDEOTRANSCODERRESULTTYPE {
    UNKNOWN = 0,
    SUCCEEDED = 1,
    FAILED = 2,
    CANCELLED = 3,
}