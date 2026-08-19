#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHANNELENTRYPOINTMETADATA {
    STATUSHEADER = 1,
    LINKTOOLTIP = 2,
    LINKBUTTON = 3,
    POSTTOOLTIP = 4,
}