#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELLINKSHARESCREEN {
    CONTEXTCARD = 1,
    CHANNELINFO = 2,
    CHANNELTHREAD = 3,
    SHARELINKSCREEN = 4,
    UPDATESTAB = 5,
    QRCODESCREEN = 6,
}