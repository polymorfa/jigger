#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum DNSRESOLUTIONMETHODTYPE {
    SYSTEM = 1,
    GOOGLE = 2,
    HARDCODED = 3,
    NODNS = 4,
    MNS = 5,
    SOCKSPROXY = 6,
    MNSSECONDARY = 7,
}