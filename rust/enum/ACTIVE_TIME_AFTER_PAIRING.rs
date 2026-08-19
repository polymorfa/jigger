#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ACTIVETIMEAFTERPAIRING {
    MINS10 = 1,
    MINS20 = 2,
    MINS40 = 3,
    MINS60 = 4,
    MINS5 = 5,
}