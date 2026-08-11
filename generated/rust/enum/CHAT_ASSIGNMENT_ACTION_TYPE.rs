#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum CHATASSIGNMENTACTIONTYPE {
    ACTIONASSIGNED = 0,
    ACTIONUNASSIGNED = 1,
    ACTIONREASSIGNED = 2,
}