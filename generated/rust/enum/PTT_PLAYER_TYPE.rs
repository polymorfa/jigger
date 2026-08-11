#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PTTPLAYERTYPE {
    AUDIOQUEUE = 0,
    AVPLAYER = 1,
    AVAUDIOPLAYER = 2,
    OPUSPLAYER = 3,
    ANDROIDPLAYER = 4,
    EXOPLAYER = 5,
    UWPPLAYER = 6,
    VOIPPLAYER = 7,
}