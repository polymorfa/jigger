#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSCONTENTSOURCE {
    CAMERA = 1,
    EXTERNAL = 2,
    FORWARD = 3,
    GALLERY = 4,
    CHANNEL = 5,
    RESHARE = 6,
    AIIMAGINE = 7,
    DRAFT = 8,
    LOCATION = 9,
}