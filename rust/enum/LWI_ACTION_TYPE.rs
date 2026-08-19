#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LWIACTIONTYPE {
    STARTLOADING = 1,
    STOPLOADING = 2,
    RESUMELOADING = 3,
    ERRORLOADING = 4,
    PAUSELOADING = 5,
}