#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PLAYBACKORIGINTYPE {
    CONVERSATION = 1,
    STATUS = 2,
    CHANNELS = 3,
}