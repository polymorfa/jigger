#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum LWICTWAADSTATUSTYPE {
    ACTIVE = 1,
    SCHEDULED = 2,
    PAUSED = 3,
    NOTDELIVERING = 4,
    REJECTED = 5,
    FINISHED = 6,
    INREVIEW = 7,
    COMPLETED = 8,
    EXTENDABLE = 9,
    UNABLETOCREATE = 10,
    LIMITEDDELIVERY = 11,
}