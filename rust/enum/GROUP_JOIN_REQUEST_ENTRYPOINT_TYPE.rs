#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GROUPJOINREQUESTENTRYPOINTTYPE {
    SYSTEMMESSAGE = 1,
    CONVERSATIONBANNER = 2,
    GROUPINFO = 3,
    NOTIFICATION = 4,
}