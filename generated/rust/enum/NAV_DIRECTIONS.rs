#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum NAVDIRECTIONS {
    NEXTBUCKET,
    NEXTCARD,
    PREVBUCKET,
    PREVCARD,
    STAYHERE,
}