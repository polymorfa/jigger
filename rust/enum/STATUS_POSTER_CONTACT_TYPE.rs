#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum STATUSPOSTERCONTACTTYPE {
    UNKNOWN = 0,
    CONTACT = 1,
    TRUSTEDINDIVIDUAL = 2,
    TRUSTEDGROUPMEMBER = 3,
    SELF = 4,
    CHANNEL = 5,
}