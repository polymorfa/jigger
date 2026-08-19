#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PTTWAVEFORMRESULT {
    SUCCESS = 1,
    ALLZEROES = 2,
    ALLONES = 3,
    MISSING = 4,
}