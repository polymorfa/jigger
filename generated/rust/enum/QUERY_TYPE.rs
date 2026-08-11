#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum QUERYTYPE {
    STICKERSTOREDATA = 0,
    PREVIEWIMAGEDOWNLOAD = 1,
    STICKERPACKDATA = 2,
    STICKERSEARCH = 3,
    DISCOVERYPACK = 4,
}