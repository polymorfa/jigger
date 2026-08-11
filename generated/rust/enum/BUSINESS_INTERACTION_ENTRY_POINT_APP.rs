#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum BUSINESSINTERACTIONENTRYPOINTAPP {
    FACEBOOK = 1,
    INSTAGRAM = 2,
    WHATSAPP = 3,
    EXTERNAL = 4,
}