#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GCREKEYMASTERERROR {
    NONE = 0,
    FAILEDTOGENERATENEWE2EEKEYS = 1,
    FAILEDTOUPDATEPARTICIPANTKEYS = 2,
}