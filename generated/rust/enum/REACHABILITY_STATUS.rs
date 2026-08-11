#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum REACHABILITYSTATUS {
    NOTREACHABLE = 0,
    REACHABLEVIAWIFI = 1,
    REACHABLEVIAWWAN = 2,
    REACHABILITYUNKNOWN = 3,
}