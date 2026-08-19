#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum KMPSYNCDFLOWENUM {
    KMPENCRYPTION = 0,
    KMPDECRYPTION = 1,
    KMPOUTGOINGPROCESSOR = 2,
    KMPINCOMINGPROCESSOR = 3,
    NONE = 4,
}