#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PTTSTREAMTYPE {
    UNKNOWN = 0,
    AAC = 1,
    MP3 = 2,
    AMRNB = 3,
    AMRWB = 4,
    OPUS = 5,
    MULTIPLETRACKS = 6,
}