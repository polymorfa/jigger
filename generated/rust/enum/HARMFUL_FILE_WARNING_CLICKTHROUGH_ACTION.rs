#[repr(i64)]
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum HARMFULFILEWARNINGCLICKTHROUGHACTION {
    CANCEL = 0,
    OPEN = 1,
    DIALOGDISMISSED = 2,
    LEARNMORE = 3,
    DIALOGOPEN = 4,
}