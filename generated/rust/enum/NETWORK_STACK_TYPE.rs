#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NETWORKSTACKTYPE {
    NATIVE = 0,
    OKHTTP = 1,
    LIGER = 2,
    APACHE = 3,
    WATLS = 4,
    CRONET = 5,
    TIGONHUC = 6,
    TIGONMNS = 7,
}