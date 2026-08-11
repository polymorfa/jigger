#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VIDEOPLAYRESULT {
    OK = 1,
    ERRORPLAYER = 2,
    ERRORVIDEOTRACK = 3,
    ERRORAUDIOTRACK = 4,
    ERRORDOWNLOADFAILED = 5,
}