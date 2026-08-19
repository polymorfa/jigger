#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum THREADCREATIONTIME {
    LESSTHAN1DAYAGO = 0,
    LESSTHAN7DAYSAGO = 1,
    LESSTHAN30DAYSAGO = 2,
    MORETHAN30DAYSAGO = 3,
}