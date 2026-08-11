#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum GRAPHQLREQUESTRESULT {
    SUCCESS = 1,
    FAILURE = 2,
}