#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STICKERERRORTYPE {
    DECOMPRESSION = 2,
    SENDERVALIDATION = 3,
    RECEIVERVALIDATION = 4,
}