#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum HTTPPROTOCOLVERSIONTYPE {
    HTTP1 = 0,
    HTTP2 = 1,
    HTTP3 = 2,
}