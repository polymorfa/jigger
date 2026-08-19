#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum FLOWENTRYPOINT {
    MESSAGECTA = 0,
    BIZCARDCTA = 1,
    CARTFAB = 2,
    MESSAGEBODY = 3,
    MESSAGEIMAGE = 4,
    GREETINGMESSAGE = 5,
}