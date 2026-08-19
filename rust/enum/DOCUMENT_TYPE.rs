#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DOCUMENTTYPE {
    OTHER = 1,
    IMAGE = 2,
    VIDEO = 3,
    AUDIO = 4,
    DOCUMENT = 5,
    COMPRESSEDFILE = 6,
    EXECUTABLE = 7,
    VCARD = 8,
}