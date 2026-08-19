#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum PRIVACYTIPACTIONTYPE {
    VIEW = 1,
    CLICKPRIVACYTIP = 2,
    CLICKOK = 3,
    CLICKOUTSIDE = 4,
}