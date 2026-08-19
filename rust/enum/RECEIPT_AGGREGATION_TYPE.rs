#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum RECEIPTAGGREGATIONTYPE {
    NONE = 0,
    MULTIMESSAGES = 1,
    MULTIPARTICIPANTS = 2,
    AGGREGATEBYID = 3,
}