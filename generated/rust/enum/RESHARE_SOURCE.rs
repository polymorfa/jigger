#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RESHARESOURCE {
    MENTIONSRESHARE = 1,
    STATUSRESHARE = 2,
    FORWARDEDFROMSTATUS = 3,
}