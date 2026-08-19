#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum VOTINGPHASES {
    JUSTVOTED,
    RESULTS,
    VOTING,
}