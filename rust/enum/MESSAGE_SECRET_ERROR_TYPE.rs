#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MESSAGESECRETERRORTYPE {
    MISSINGMESSAGESECRET = 0,
    WRONGLENGTH = 1,
    ENCRYPTIONERROR = 2,
    DECRYPTIONERROR = 3,
}