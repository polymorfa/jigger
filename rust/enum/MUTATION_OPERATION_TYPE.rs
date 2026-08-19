#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MUTATIONOPERATIONTYPE {
    SET = 0,
    REMOVE = 1,
}