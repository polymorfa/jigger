#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AUDIOSTREAMTYPE {
    STREAMMUSIC = 0,
    STREAMVOICECALL = 1,
}