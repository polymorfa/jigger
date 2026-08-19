#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum IMAGINEACTIONTHREADTYPE {
    GROUPCHAT = 1,
    P2PTHREAD = 2,
    MESSAGEYOURSELF = 3,
    METAAI = 4,
    TOCHARACTER = 5,
    TOUGC = 6,
    STATUS = 7,
    ARSURFACE = 8,
}