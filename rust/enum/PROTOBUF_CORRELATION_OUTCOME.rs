#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PROTOBUFCORRELATIONOUTCOME {
    LEGACYNOINTERACTION = 0,
    LEGACYREJECTED = 1,
    LEGACYACCEPTED = 2,
}