#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELDYIEVENTTYPE {
    CHANNELREPORTREQUEST = 1,
    CHANNELREPORTDOWNLOAD = 2,
    CHANNELREPORTEXPORT = 3,
}