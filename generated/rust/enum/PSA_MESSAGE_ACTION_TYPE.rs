#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PSAMESSAGEACTIONTYPE {
    SAVE = 1,
    FORWARD = 2,
    REACT = 3,
    LINKCLICK = 4,
    MEDIAPLAY = 5,
    DELETE = 6,
    PUSHNOTIFICATIONCLICK = 7,
    PUSHNOTIFICATIONRENDER = 8,
}