#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DEFAULTPROTOCOLSCHEMETYPE {
    TEL = 0,
    MSVOIPCALL = 1,
    MSVOIPVIDEO = 2,
    IM = 3,
    MSIPMESSAGING = 4,
}