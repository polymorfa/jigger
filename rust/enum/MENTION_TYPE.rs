#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MENTIONTYPE {
    REGULARUSER = 0,
    GROUP = 1,
    METAAIBOT = 2,
    EVERYONE = 3,
    NONGROUPUSER = 4,
}