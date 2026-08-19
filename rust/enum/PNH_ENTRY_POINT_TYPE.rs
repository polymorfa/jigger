#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PNHENTRYPOINTTYPE {
    CHATCREATION = 1,
    CHATINFOREQUEST = 2,
    AUDIO = 3,
    VIDEO = 4,
    PNREQUEST = 5,
    SYSTEMMESSAGE = 6,
    CHATINFOPNVISIBILITY = 7,
}