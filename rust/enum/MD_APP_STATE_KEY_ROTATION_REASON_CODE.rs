#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MDAPPSTATEKEYROTATIONREASONCODE {
    APPSTATESYNCKEYEXPIRY = 1,
    DEVICEDEREGISTERATION = 2,
    NOKEYS = 3,
}