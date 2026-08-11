#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WEBDBNAMETYPE {
    MODELSTORAGE = 1,
    FTSSTORAGE = 2,
    JOBSSTORAGE = 3,
    LOADGENSTORAGE = 4,
    LRUMEDIASTORAGEIDB = 5,
    OFFDSTORAGE = 6,
    QPLSTORAGE = 7,
    SIGNALSTORAGE = 8,
    WORKERSTORAGE = 9,
    SW = 10,
    WAWC = 11,
    WAWCDBENC = 12,
    STATUSSTORAGE = 13,
}