#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBDBLOADERTYPE {
    MAIN = 1,
    WEBWORKER = 2,
    SERVICEWORKER = 3,
}