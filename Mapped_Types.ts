// interface Start {
//     first: string;
//     second: string;
// }

// interface End extends Start {
//     last: string;
// }

/* Other apporach */

interface Start {
    first: string,
    second: string
}
type End = Start & {last: string}