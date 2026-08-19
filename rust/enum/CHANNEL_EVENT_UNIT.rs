#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELEVENTUNIT {
    RECOMMENDEDCHANNELS = 1,
    SIMILARCHANNELS = 2,
    RECENTSEARCHES = 3,
}