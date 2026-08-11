#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSMEDIAPICKERFORMATTYPE {
    TEXT = 1,
    VOICE = 2,
    LAYOUTS = 3,
    MUSIC = 4,
    AIIMAGINE = 5,
    LOCATION = 6,
}