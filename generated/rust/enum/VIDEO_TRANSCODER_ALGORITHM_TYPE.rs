#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VIDEOTRANSCODERALGORITHMTYPE {
    WAIPHONE = 0,
    FBIPHONE = 1,
    WASMMP4CHECKANDREPAIR = 2,
    WEBMEDIAWORKER = 3,
    HYBRIDBRIDGE = 4,
}