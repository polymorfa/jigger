#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELPRODUCERINSIGHTSSURFACE {
    CHANNELINFO = 0,
    REACHTAB = 1,
    GROWTHTAB = 2,
    FOLLOWERSTAB = 3,
}