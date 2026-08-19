#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum THREADTYPE {
    GROUP = 1,
    BROADCAST = 2,
    INDIVIDUAL = 3,
    STATUS = 4,
    CHANNEL = 5,
    SUBGROUP = 6,
    DEFAULTSUBGROUP = 7,
    PARENTGROUP = 8,
    BOT = 9,
}