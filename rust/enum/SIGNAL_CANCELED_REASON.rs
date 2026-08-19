#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum SIGNALCANCELEDREASON {
    COMPANIONDEVICE = 0,
    DISCLOSUREDISMISSED = 1,
    INVALIDORIGINALURL = 2,
}