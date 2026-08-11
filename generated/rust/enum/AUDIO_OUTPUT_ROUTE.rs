#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum AUDIOOUTPUTROUTE {
    DEFAULT = 0,
    SPEAKER = 1,
    EARPIECE = 2,
    BLUETOOTH = 3,
    HEADSET = 4,
    CARPLAY = 5,
}