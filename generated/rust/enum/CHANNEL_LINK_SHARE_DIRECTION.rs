#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELLINKSHAREDIRECTION {
    WHATSAPP = 1,
    STATUS = 2,
    EXTERNAL = 3,
    QRCODE = 4,
}