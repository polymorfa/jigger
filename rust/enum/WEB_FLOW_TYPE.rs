#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBFLOWTYPE {
    NATIVEWEB = 0,
    EXTERNALWEB = 1,
}