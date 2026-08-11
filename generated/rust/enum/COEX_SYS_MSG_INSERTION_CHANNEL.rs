#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum COEXSYSMSGINSERTIONCHANNEL {
    CHATOPEN = 0,
    MESSAGERECEIVE = 1,
    HISTORYSYNC = 2,
}