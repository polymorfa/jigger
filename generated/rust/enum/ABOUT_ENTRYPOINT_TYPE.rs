#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ABOUTENTRYPOINTTYPE {
    SETTINGS = 1,
    PROFILE = 2,
    METAB = 3,
    DEEPLINK = 4,
    ONEONONECHAT = 5,
}