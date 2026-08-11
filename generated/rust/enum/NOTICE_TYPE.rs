#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NOTICETYPE {
    LEGACYUSERNOTICE = 0,
    BADGEDUSERNOTICE = 1,
    PDFNDISCLOSURE = 2,
}