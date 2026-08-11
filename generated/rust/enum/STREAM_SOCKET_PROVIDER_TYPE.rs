#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STREAMSOCKETPROVIDERTYPE {
    UNKNOWNSOCKET = 0,
    PLATFORMSOCKET = 1,
    MNSSOCKET = 2,
    SOCKSPROXY = 3,
}