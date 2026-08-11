#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BANNERSTATUS {
    DISPLAYED = 0,
    HIDDEN = 1,
    CLOSED = 2,
}