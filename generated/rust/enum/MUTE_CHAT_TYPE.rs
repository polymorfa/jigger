#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MUTECHATTYPE {
    ONEONONE = 1,
    GROUP = 2,
    CHANNEL = 3,
    INTEROP = 4,
    INORGANICNOTIFICATION = 5,
}