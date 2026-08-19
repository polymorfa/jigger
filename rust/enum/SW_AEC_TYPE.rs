#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SWAECTYPE {
    NONE = 1,
    SPEEX = 2,
    WEBRTC = 3,
    MWEBRTC = 4,
    ECHOSUPPRESSOR = 5,
}