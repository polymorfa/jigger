#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ACTIONTHREADTYPETYPE {
    GROUPCHAT = 1,
    P2PTHREAD = 2,
    MESSAGEYOURSELF = 3,
    METAAI = 4,
    TOCHARACTER = 5,
    TOUGC = 6,
    ARSURFACE = 7,
}