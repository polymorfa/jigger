#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBTPSOURCETYPE {
    CHAT = 1,
    MEDIAHUB = 2,
    CHATMEDIA = 3,
    THUMBNAIL = 4,
    MEDIAVIEWERHEADER = 5,
    MESSAGEBUBBLE = 6,
    PDFVIEWERERRORSCREEN = 7,
    PDFVIEWER = 8,
    PDFSHARER = 9,
    PDFRECEIVER = 10,
}